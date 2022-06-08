function renderAdToTask() {
    let adToTask = document.getElementById('workspace');
    adToTask.innerHTML = '';
    adToTask.innerHTML += adToTaskTemplate();
}

function openDropdown() {
    document.getElementById('employee').classList.remove('d-none');
}

function adToTaskTemplate() {
    return /*html*/`
        <div class="add-task-main-container">

            <div class="add-task-container">

                <div class="top-row">
                    <div class="title-input-container">
                        <h2>Title</h2>
                        <input type="text">
                    </div>
                    <div class="date-container">
                        <h2>Due Date</h2>
                        <input type="date">
                    </div>
                </div>

                <div class="mid-row">
                    <div class="category-container">
                        <h2>Category</h2>
                        <select name="" id="">
                            <option value="">Management</option>
                            <option value="">Software Development</option>
                            <option value="">UX/UI Design</option>
                            <option value="">Human Ressources</option>
                        </select>
                    </div>
                    <div class="urgency-container">
                        <h2>Urgency</h2>
                        <select name="" id="">
                            <option value="">High</option>
                            <option value="">Intermediate</option>
                            <option value="">Low</option>
                        </select>
                    </div>
                </div>

                <div class ="bottom-row">
                    <div class="description-container">
                        <h2>Description</h2>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="assigned-to-container">
                        <h2>Assigned to</h2>
                        <div class="placeholder-container">
                            <div class="icon-container">
                                <img class="profilepicture" src="img/Icons/kevin.jpg" alt="">
                                <div onclick="openDropdown()" class="add-button-container">
                                    <img class="add-button" src="img/Icons/add-icon.png" alt="">
                                </div>
                                <select id="employee" class="choose-name-input d-none" name="" id="">
                                    <option value="">Kevin</option>
                                    <option value="">Feros</option>
                                    <option value="">Norbert</option>
                                    <option value="">Daniel</option>
                                </select>
                            </div>
                            <div class="button-container">
                                <button>Cancel</button>
                                <button>Create Task</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    `;
}