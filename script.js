document.addEventListener('DOMContentLoaded', () => {  
    const questionsContainer = document.getElementById('questions-container');  

    // Fetch data from JSON file  
    fetch('questions.json')  
        .then(response => response.json())  
        .then(questions => {  
            questions.forEach((question, index) => {  
                // Create question container  
                const questionElement = document.createElement('div');  
                questionElement.classList.add('question');  

                // Add question content  
                const contentElement = document.createElement('div');  
                contentElement.classList.add('question-content');  
                contentElement.innerHTML = question.content;  // Use innerHTML to retain formatting like <h1>, <p>, etc.
                questionElement.appendChild(contentElement);  

                questionsContainer.appendChild(questionElement);  
            });  
        })  
        .catch(error => {  
            console.error('Error fetching questions:', error);  
        });  
});
