let date = new Date().getTime();


function renderAdToTask() {

    let adToTask = document.getElementById('workspace');
    adToTask.innerHTML = '';
    adToTask.innerHTML += adToTaskTemplate();




}


function showworker() {
    document.getElementById('worker').classList.remove('d-none');

}

function showWorkerPic1() {

    document.getElementById('workpic').innerHTML = `<img src="img/Icons/feros.jpeg">`;

}


function adToTaskTemplate() {
    return /*html*/ `

          
        <div class="content-area">
        <h1>Add Task</h1>
        <p class="sentencecolor">Learning Management System Project</p>


        <div class="form">
            <div class="form-section-left">
                <label>TITLE</label>
                <input id="title" required type="text">
                <label>CATEGORY</label>
                <select>
                    <option value=""></option>
                    <option value="Management">Management</option>
                    <option value="Marketing">Marketing</option>
                    <option value="IT">IT</option>
                    <option value="Production">Production</option>
                    <option value="Finance">Finance</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Sales">Sales</option>
                </select>
                <label for="description">DESCRIPTION</label>
                <textarea required name="description" cols="30" rows="7"></textarea>
            </div>
            <div class="form-section-right">
                <label>DATE</label>
                <input id ="getDate" placeholder="${date}">
                <label>URGENCY</label>
                <select>
                    <option value=""></option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>


                <div class="employees-section">
                  <label>ASSIGNED TO</label>
                        <div>
                            <div id = "workpic">
                               
                            </div>
                                 <img onclick="showworker()" src="img/icons/icon plus.png" class="employees-section-plus-btn">
                        </div>


                        <select  id="worker" class="choose-employee d-none">
                             <option class="employee" ></option>
                             <option onclick ="showWorkerPic1()"  class="employee" >Feros Djahani</option>
                             <option onclick ="showWorkerPic()"  class="employee" >Daniel Pozzan</option>
                             <option onclick ="showWorkerPic()"  class="employee" >Kevin Wagner</option>
                             <option onclick ="showWorkerPic()"  class="employee" >Norbert Madarasz</option>
                        </select>
                        
                            
                            
                        
                </div>
                
                <div class="form-btn-section">
                    <div><button class="cancel-btn" onclick="clearInput()">CANCEL</button></div>
                    <div><button type="submit" class="create-task-btn" onclick="setNewTask()">CREATE TASK</button>
                    </div>
                </div>
                <div class="link-area">
                    <a href="./backlog.html" class="create-task-btn d-none" id="linkToBacklog">TO BACKLOG</a>
                </div>
            </div>
        </div>

    </div>
</div>


</div>




    `
}