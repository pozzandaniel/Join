function renderAdToTask() {

    let adToTask = document.getElementById('workspace');
    adToTask.innerHTML = '';
    adToTask.innerHTML += adToTaskTemplate();




}

function showworker() {
    document.getElementById('worker').classList.remove('d-none');

}

function adToTaskTemplate() {
    return `

          
        <div class="content-area">
        <h1>Add Task</h1>
        <p class="sentencecolor">Learning Management System Project</p>


        <div class="form">
            <div class="form-section-left">
                <label>TITLE</label>
                <input required type="text">
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
                <input required type="date" placeholder="dd-mm-yyyy">
                <label>URGENCY</label>
                <select>
                    <option value=""></option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <label>ASSIGNED TO</label>
                <div class="employees-section">
                    <img src="img/icons/faviconblau.ico" class="employees-section-img">
                    <img onclick="showworker()" src="img/icons/icon plus.png" class="employees-section-plus-btn">

                    <div id="worker" class="choose-employee d-none">
                        <div class="employee" onclick="setEmployee('<img src/.jpeg'> 'Feros Djahani>', 'Djahani@example.de','green')">
                            <img src="./img/icons/feros.jpeg" class="employees-section-img">
                            <div class="employee-name">Feros Djahani</div>
                        </div>
                        <div class="employee" onclick="setEmployee('./img/.png', 'Daniel Pozzan', 'Pozzan@example.de', 'orange')">
                            <img src="./img/icons/daniel.jpg" class="employees-section-img">
                            <div class="employee-name">Daniel Pozzan</div>
                        </div>
                        <div class="employee" onclick="setEmployee('./img/.jpg', 'Kevin Wagner', 'Wagner@example.de', 'blue')">
                            <img src="./img/icons/kevin.jpg" class="employees-section-img">
                            <div class="employee-name">Kevin Wagner</div>
                        </div>
                        <div class="employee" onclick="setEmployee('./img/.jpg', 'Norbert Madarasz', 'Madarasz@example.de', 'blue')">
                            <img src="./img//icons/norbert.jpg" class="employees-section-img">
                            <div class="employee-name">Norbert Madarasz</div>
                        </div>
                    </div>

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