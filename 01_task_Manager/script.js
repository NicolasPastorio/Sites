//Função que adiciona tarefa
		function addTask(){
			//colocando  o valor da tag input dentro de uma const
			const taskTitle = document.querySelector("#task-title").value;

			if(taskTitle){
				//clonar template
				//a const template recebe a li
				const template = document.querySelector(".template");
				//a newTask recebe um clonde da li da const template
				const newTask = template.cloneNode(true);
				//seleciona o span dentro do li clone e coloca a const taskTitle que contem o value do input
				newTask.querySelector(".task-title").textContent = taskTitle;

				//remove classes do clone para que ele possa aparecer na tela 
				newTask.classList.remove("template");
				newTask.classList.remove("hide");

				//adicionar tarefa na lista(ul)
				//selecionar a lista(ul)
				const list = document.querySelector("#task-list");
				list.appendChild(newTask);

				//adicionar evento de remover a ul que já foi adicionada na ul
				const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
					removeTask(this);
				});
				
				//adicionar evento de completar tarefa
				const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
					completeTask(this);
				});

				//limpar texto do input
				document.querySelector("#task-title").value = "";
			}
		}

		//Função de remover tarefa
		function removeTask(task){
			task.parentNode.remove(true);
		}
		//Função de completar tarefa
		function completeTask(task){
			const taskToComplete = task.parentNode;
			taskToComplete.classList.toggle("done");
		}

		//coloca dentro de uma constante a tag button
		const addBtn = document.querySelector("#add-btn");
		//Evento de adicionar tarefa quando clicar sobre o button
		addBtn.addEventListener("click", function(e){
			//submeter formulário
			e.preventDefault();
			
			addTask();
		});