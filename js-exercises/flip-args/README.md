# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function () {
  console.log(arguments);
});

flipped("a", "b", "c", "d");
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**

_Write your response here_

- The most relatable use-case would be using with loop

function actionHandler (actionId) {
  return function(){
    // Any Operation Can be performed
    alert(actionId);
  }
}

{
  <>
  buttons.map((singleButton) => (
    <Button onClick=generateMyHandler(singelButton?.actionId)>
    {singleButton?.text}
    </Button> 
  ))
  </>
}



### **What test cases can you add to the test file?**

_Add the relevant test-cases in the test file_

✅ Done Adding a few test cases.

# Restrictions

- Don't use any libraries
