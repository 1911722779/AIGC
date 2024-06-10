// 用户每次创建一个todo，就存进数组
// 循环数组，生成数组长度相同的li结构
var todoData = [];

// 获取新增按钮
var addTodo = document.querySelector('.btn');

//获取ul-list
var todoList = document.querySelector('.list');

// 新增按钮
function addNewTodo(){
    // input是否有值
    if(document.getElementById('newTodo').value !==''){
        todoData.push({
            id: Date.now(),
            content: document.getElementById('newTodo').value,
            completed: false
        })

       //渲染列表
       render();
       document.getElementById('newTodo').value = '';  //新增之后将输入框清空
    }
}

function render(){  //生成li
    var str = '';
    for(var i = 0; i<todoData.length; i++){
        //todoData[i]
        var item = todoData[i];

        str +=` 
            <li class="list-item">
                <input type="checkbox" class="item-check" id="">
                <p class="item-content">${item.content}</p>
                <span class="close" data-id="${item.id}" data-action="remove">✖</span>
            </li>
        `
    }

    //往ul中植入str
    todoList.innerHTML = str; //将整个字符串植入进html的ul中
}

function removeTodo(e){
    console.log(e.target.dataset.id);
    var id = e.target.dataset.id;
    if(e.target.dataset.action == "remove"){
        //拿到当前这个span上的id值，找到数组中哪个对象中的id和这个span的id相等，找出它的下标，按照下标移除数组中的元素，然后render()
        //remove移除数据
        var index = 0;
        for(var i = 0; i < todoData.length; i++){
            if(todoData[i].id == id){
                index = i;
            }else{
                i++;
            }
        }
        todoData.splice(index,1);

        //渲染页面
        render();
    }
}

//监听按钮
addTodo.addEventListener('click', addNewTodo); //表示鼠标点击('click')一下，执行一次addNewTodo函数
todoList.addEventListener('click', removeTodo); //×的动态设置