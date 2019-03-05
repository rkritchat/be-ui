export class TaskModel{
    
    taskId:number
    taskLabel:string
    user:string
    taskDesc:string
    taskProgress:string
    taskStatus:string

    constructor(taskId:number, taskLabel:string, user:string, taskDesc:string, taskProgress:string, taskStatus:string){
        this.taskId = taskId
        this.taskLabel = taskLabel
        this.user = user
        this.taskDesc = taskDesc
        this.taskProgress = taskProgress
        this.taskStatus = taskStatus
    }
}