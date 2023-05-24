


///rivesh chart

const riveshChart = document.querySelector('canvas.rivesh-chart');
const riveshChart2 = document.querySelector('canvas.rivesh-chart2');
const riveshChart3 = document.querySelector('canvas.rivesh-chart3');
const riveshChart4 = document.querySelector('canvas.rivesh-chart4');

const red = ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red',]

//germany index
fetch('https://www.econdb.com/api/series/SEIDE/?API_TOKEN=2d9649e4af5557c5414c508acf0b2e295b5f4078&format=json')
    .then(Response => Response.json())
    .then(data => showLinechart(data));


function showLinechart(data) {
    console.log(data.data);
    // console.log(data);
    // for (key in data) {
    //     console.log(key);
    // }
    // console.log(riveshChart);
    // console.log(data.data.dates);
    // console.log(data.data.values);


    new Chart(riveshChart, {
        type: 'line',
        data: {
            labels: data.data.dates,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'red',
                pointRadius: 1,
                label: '',
                data: data.data.values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

//japan index

fetch('https://www.econdb.com/api/series/SEIJP/?API_TOKEN=dadf157d4ac249d43e8a3d468cb363d17100f985&format=json')
    .then(Response => Response.json())
    .then(data => showLine2chart(data));


function showLine2chart(data) {
    // console.log(data.data);
    // console.log(data);
    // for (key in data) {
    //     console.log(key);
    // }
    // console.log(riveshChart2);
    // console.log(data.data.dates);
    // console.log(data.data.values);


    new Chart(riveshChart2, {
        type: 'line',
        data: {
            labels: data.data.dates,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'red',
                pointRadius: 1,
                label: '',
                data: data.data.values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

//USA index
fetch('https://www.econdb.com/api/series/SEIUS/?API_TOKEN=dadf157d4ac249d43e8a3d468cb363d17100f985&format=json')
    .then(Response => Response.json())
    .then(data => showLine3chart(data));


function showLine3chart(data) {
    // console.log(data.data);
    // console.log(data);
    // for (key in data) {
    //     console.log(key);
    // }
    // console.log(riveshChart3);
    // console.log(data.data.dates);
    // console.log(data.data.values);


    new Chart(riveshChart3, {
        type: 'line',
        data: {
            labels: data.data.dates,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'red',
                pointRadius: 1,
                label: '',
                data: data.data.values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

//France index
fetch('https://www.econdb.com/api/series/SEIUS/?API_TOKEN=dadf157d4ac249d43e8a3d468cb363d17100f985&format=json')
    .then(Response => Response.json())
    .then(data => showLine4chart(data));


function showLine4chart(data) {
    // console.log(data.data);
    // console.log(data);
    // for (key in data) {
    //     console.log(key);
    // }
    // console.log(riveshChart4);
    // console.log(data.data.dates);
    // console.log(data.data.values);


    new Chart(riveshChart4, {
        type: 'line',
        data: {
            labels: data.data.dates,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'red',
                pointRadius: 1,
                label: '',
                data: data.data.values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "school") {
        alert("You have successfully logged in.");
        location.reload();
        window.location.href='index.html'
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
