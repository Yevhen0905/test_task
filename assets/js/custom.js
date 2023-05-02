let comments = [];
loadComments()

const buttonAddComment = document.getElementById('comment_add');

buttonAddComment.addEventListener('click', function (event) {
  event.preventDefault();
  let commentName = document.getElementById('comment_name');
  let commentText = document.getElementById('comment_text');

  const comment = {
    name: commentName.value,
    text: commentText.value,
    time: Math.floor(Date.now() / 1000)
  }

  commentName.value = '';
  commentText.value = '';

  comments.push(comment);
  saveComment();
  showComment();
})

function saveComment() {
  localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
  if (localStorage.getItem('comments')) {
    comments = JSON.parse(localStorage.getItem('comments'));
    showComment();
  }
}

function showComment() {
  let divCommentNew = document.getElementById('comment_new');
  let out = '';
  comments.forEach(function (item) {
    out += `
              <div class="profile">
                <img src="./assets/img/1.gif">
              </div>
              <div class="comment-content">
                <p class="name-new">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">${item.name}</font>
                  </font>
                </p>
                <p class="text_new">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">${item.text}</font>
                  </font>
                </p>
                <p> ${timeConverter(item.time)}</p>
               </div>
    `
  })
  divCommentNew.innerHTML = out;
}
showComment()



function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}
//////////////////////////////////////////////////////



const buttonResponse = document.getElementById('content1');
const listResponse = [];
buttonResponse.onclick = e => {
   let elementClick = e.target.innerText;
   listResponse.push(elementClick)
}

