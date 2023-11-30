import React from "react";

function Form() {
    
    function handleSubmit(e) {

        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);

        fetch('/some-api', { method: form.method, body: formData });
    
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
      }

    return(
        <form method="Post" onSubmit={handleSubmit}>
            <label> 
                E-mail <input className="input" placeholder="Email"/>
            </label>
        </form>
    );
}
export default Form;