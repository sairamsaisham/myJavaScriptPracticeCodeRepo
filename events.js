////there are several ways to associate an event handler to the event.
// 1. Using the attributes of an HTML tag.
 function changeColorOnMouseOver()
{
    var control = document.getElementById("btn");
    control.style.background = 'red';
    control.style.color = 'yellow';
}
function changeColorOnMouseOut()
{
    var control = document.getElementById("btn");
    control.style.background = 'black';
    control.style.color = 'white';
}
 
/*******************************************/
//How to show confirmation dialog in javascript.
function confirmSubmit()
{
    if (confirm("Are you sure you want to select"))
    {
        alert("You selected OK");
        return true;
    }
    else {
        alert("You selected cancel");
        return false;
    }
}
/*******************************************/
//Form data validation and many more.
function validateRequiredField(controlId)
{
    var control = document.getElementById(controlId);

    control.style.color = "white";
    if (control.value == "")
    {
        control.style.background = "red";

    }
    else
    {
        control.style.background = "green";
    }
    
}

/**********************************************/
//// 2. Assigning event handlers in javascript using DOM object property.
document.getElementById("btnDOM").onmouseover = function ()
{
    this.style.background = 'red';
    this.style.color = 'yellow';
};
document.getElementById("btnDOM").onmouseout = function ()
{
    this.style.background = 'black';
    this.style.color = 'white';
};

/***********************************************/
//// If an event handler is assigned using both, i.e an HTML attribute
//// -And DOM object property. the handler that is assigned using the DOM object property
//// -overwrites the one assigned using HTML attribute.
document.getElementById("btnDOMpropertyOverwrite").onclick = clickHandler2;
function clickHandler1()
{
    alert("Handler set using HTML attribute");
}
function clickHandler2()
{
    alert("Handler set using DOM object Property");
}

/*************************************************/
//// The handler that is assigned last will get in output.
//// example: Handler2() is assigned after Handler1(), so Handler2()
//// -Overwrites Handler1().
document.getElementById("btnLastDOMpropertyOverwrite").onclick = Handler1;
document.getElementById("btnLastDOMpropertyOverwrite").onclick = Handler2;
function Handler1()
{
    alert("Handler 1");
}
function Handler2()
{
    alert("Handler 2");
}

/*************************************************/
//// 3.Assigning event handlers in javascript using the following special methods
// : addEventListener
// : removeEventListener
// : attachEvent
// : detachEvent
//// Internet Explorer 9 (and later versions) & all the other modern browsers support 
//-addEventListener() and removeEventListener() methods.
// Syntax: element.addEventListener(event, handler, phase) Note: The 3rd parameter phase is usually set to false as it is not used.
// Syntax: element.removeEventListener(event, handler, phase)
btnAddEventL.addEventListener("mouseover", changeColorOnMouseOver1);
btnAddEventL.addEventListener("mouseout", changeColorOnMouseOut2);

function changeColorOnMouseOver1()
{
    this.style.background = 'red';
    this.style.color = 'yellow';
}

function changeColorOnMouseOut2()
{
    this.style.background = 'black';
    this.style.color = 'white';
}

function removeHandlers()
{
    btnAddEventL.removeEventListener("mouseover", changeColorOnMouseOver1);
    btnAddEventL.removeEventListener("mouseout", changeColorOnMouseOut2);
}

/***********************************************************/
//// using this above approach you can assign more than one event handler
//// - method to a given event. The order in which handler methods are executed
//// -is not defined.
//// Example: when you click the button both the handler methods are executed.
btn1.addEventListener("click", clickHandler3);
btn1.addEventListener("click", clickHandler4);

function clickHandler3()
{
    alert("Handler 3");
}
function clickHandler4()
{
    alert("Handler 4");
}

/*******************************************************/
////Note: attachEvent() and dettachEvent() methods work only in IE8 and earlier versions.
////Syntax : element.attachEvent("on"+event, Handler) same for dettach also..
//// Cross Browser solution: attachEvent() and dettachEvent() methods to execute in all browsers have to write like below code.
if (btn2.addEventListener)
{
    btn2.addEventListener("click", clickHandler5);
}
else
{
    btn2.attachEvent("onclick", clickHandler5);
}
    
function clickHandler5()
{
    alert("Handler5 is called");
}

/*********************************************************/
//// Event object and its properties.
//Whenever an event (like click,mouseover,mouseout etc) occurs, the relevant
//-data about that event is placed into the event object.
//For example: the event object contains event data like, the X and Y
//- coordinates of the mouse pointer when the event occured, the HTML
//-element that fired the event, which mouse button is clicked etc.
//Note: The event object is always passed to the event handler method.
function getEventDetails(event)
{
   var eventDetails = "Event = " + event.type + "<br /> X = "
        + event.clientX + "<br /> Y = " + event.clientY + "<br /> Target Type = "
        + event.target.type + "<br /> Target Tag Name = " + event.target.tagName;
    document.getElementById("result").innerHTML = eventDetails;
}
// Note: This above code not works in IE8 and erlier versions(bcz of target
//- property is not supported in IE8 and erlier versions ).
//- If we want to retrieve the element that triggered the event in IE8 and erlier versions, 
//- we have to use a different property of the event object i.e, 'srcElement' property.
//So, here we have a Cross Browser solution is given below, this code
//-works in IE8 and erlier , and all modern browsers.
function getEventDetails(event)
{
var sourceElement;
if (event.srcElement)
{
    sourceElement = event.srcElement;
}
else
{
    sourceElement = event.target;
}
    
   var eventDetails = "Event = " + event.type + "<br /> X = "
        + event.clientX + "<br /> Y = " + event.clientY + "<br /> Target Type = "
        + sourceElement.type + "<br /> Target Tag Name = " + sourceElement.tagName;
    document.getElementById("result").innerHTML = eventDetails;
}

 /************************************************************************/
 //// Event Bubbling in javascript: Every bubbling process starts with
 //-the element that triggered the event and then bubbles up to the 
 //-to the containing elements in the Hierarchy.

 ////when the event gets bubbled, the keyword 'this' references
 //-the current element to which the event is bubbled. 
 //Ex: we are using 'this' keyword to referance the current div element
 //-and change its border colour. when you click on the innermost
 //- <div> element, all the 3 <div> elements border get changed 
 //- due to event bubbling.

/* var divElements = document.getElementsByTagName('div');

for (var i = 0; i < divElements.length; i++)
{
    divElements[i].onclick = function () {
        this.style.borderColor = 'red';
        alert(this.getAttribute('id') + " border color changed");
    }   
} */

//Note: this above code doesn't show our desired ouput in chrome, but
//- it works fine in IE. 

////Stoping event bubbling:If u dont want the event to be bubbled up we can stop it.
//// with IE8 and earlier versions: 'event.cancelBubble=true'
//// with IE9 and later versions: event.stopPropagation()

var divElements = document.getElementsByTagName('div');

for (var i = 0; i < divElements.length; i++)
{
    divElements[i].onclick = function () {
        event = event || window.event;

        if (event.stopPropagation)
        {
            event.stopPropagation();
        }
        else
        {
            event.cancelBubble = true;
        }
        this.style.borderColor = 'red';
        alert(this.getAttribute("id") + " border color changed");
    }
    }

    //Note: I don't know Why but this above code also doesn't show our desired ouput in chrome, but
    //- it works fine in IE. 






