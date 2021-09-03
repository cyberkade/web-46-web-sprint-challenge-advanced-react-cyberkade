# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    -functional components simply accept data and display that data. Main use is for UI.
    -stateful components have logic and state, which essentially tells the functional component what data to display

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    -componentWillMount will be called when you are first mounting the component while componentWillUpdate is called when you want to manipulate the component before it recieves new props or state

3. Define stateful logic.
    -stateful logic is any code that uses state to control what the user is seeing on the page. Based on the logic, each state change will show different elements on the page based on that state.

4. What are the three step of creating a successful test? What is done in each phase?
    -Arrange: This is when you set up and describe what the test is doing exactly
    -Act: This is when you select elements, interacct with the page and set up a user experience in some form
    -Assert: This is when you declare what the result of the act is intended to be. If the assertion comes out as incorrect there is an error somewhere in the code, or in the test