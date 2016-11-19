//only run after DOM loaded
document.addEventListener("DOMContentLoaded",hipsterProcess);

function hipsterProcess() {
	//get all the nodes that have objective-c
	var objcblocks = document.getElementsByClassName("language-objc");
	//check if the author is putting objective-c first or swift
	var objcIsFirst = true;
	//this could be null, if swift is first
	var firstObjcSibling = objcblocks[0].parentNode.nextElementSibling;
	console.log("here's sibling",firstObjcSibling,"and",firstObjcSibling.firstChild);
	//think conditional expressions evaluate left to right in javascript but this feels super hacky
	if(firstObjcSibling && firstObjcSibling.firstChild.tagName == 'pre' && firstObjcSibling.firstChild.classList.contains("language-swift")) {
		//this isn't needed because we set it to true above
		objcIsFirst = true;
		}
	else {
		objcIsFirst = false;
		}
	//setting up div prefixes
	let wrappingDivPrefix = '<div class="objcswiftblock">';
	let spanPrefixSwiftFirst = '<span class="langselect"><a class="swiftlink" data-lang="swift">Swift</a><a class="objclink" data-lang="objc">Objective-C</a></span>';
	let spanPrefixObjcFirst = '<span class="langselect"><a class="objclink" data-lang="objc">Objective-C</a><a class="swiftlink" data-lang="swift">Swift</a></span>';
	let objcDivPrefix = '<div class="objcblock">';
	let swiftDivPrefix = '<div class="swiftblock">';
	//loop around all the objective-c blocks
	for(var i = 0;i<objcblocks.length; i++) {
		//setup the objective-c div
		let objcDiv = objcDivPrefix + objcblocks[i].parentNode.outerHTML + '</div>';
		//do we have swift next?
		let nextElement = objcblocks[i].parentNode.nextElementSibling;
		let prevElement = objcblocks[i].parentNode.previousElementSibling;
		if(objcIsFirst == true && nextElement && nextElement.firstChild && nextElement.firstChild.classList.contains("language-swift") ) {
			//setup the swift div
			let swiftDiv = swiftDivPrefix + nextElement.outerHTML + '</div>';
			//let's delete the swift bit
			var swiftToDelete = nextElement;
			objcblocks[i].parentNode.parentNode.removeChild(swiftToDelete);
			//replace it with everything all divved up
			objcblocks[i].parentNode.outerHTML = wrappingDivPrefix + spanPrefixObjcFirst + objcDiv + swiftDiv + '</div>';
			}
		//if swift is first, we do the same but backwards
		else if(objcIsFirst == false && prevElement && prevElement.firstChild && prevElement.firstChild.classList.contains("language-swift") ) {
			//setup the swift div
                        let swiftDiv = swiftDivPrefix + prevElement.outerHTML + '</div>';
                        //let's delete the swift bit
                        var swiftToDelete =prevElement;
                        objcblocks[i].parentNode.parentNode.removeChild(swiftToDelete);
                        //replace it with everything all divved up
                        objcblocks[i].parentNode.outerHTML = wrappingDivPrefix + spanPrefixObjcFirst + swiftDiv + objcDiv + '</div>'; 
			}
		}
	//right, we have our divs set up correctly, so we need to hide which ever language didn't come first 
	if(objcIsFirst == true) {
		hideAllSwift();
		}
	else {
		hideAllObjc();
		}
	
	//add actions to the links to switch languages
        var swiftlinks = document.getElementsByClassName("swiftlink");
        var objclinks = document.getElementsByClassName("objclink");
        for(var i = 0; i < swiftlinks.length; i++) {
                swiftlinks[i].onclick = hideAllObjc;
                console.log('setting for element',swiftlinks[i]);
                }
        for(var j = 0; j < objclinks.length; j++) {
                objclinks[j].onclick = hideAllSwift;
                }
	}


function hideAllSwift() {
	console.log('hide all swift called');	
	}

function hideAllObjc() {
	console.log('hide all objective c called');
	}
