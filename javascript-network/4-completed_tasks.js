#!/usr/bin/node
const req = require("request");

const url = process.argv[2];

req(url, (error, response, body) => {
    if (!errror && response.statusCode === 200) {
        const tasks = JSON.parse(body);
        const completedTasks = {};

        tasks.array.forEach(task => {
          if (task.completed) {
            if (completedTasks[task.userId]) {
                completedTasks[task.userId]++;
            } else {
                completedTasks[task.userId] = 1;
            }
          }
        });

        console.log(completedTasks);
    } else {
        console.error(`Error fetching data: ${error}`);
    }
});