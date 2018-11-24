//有关请假的一切
import {handleResponse, server} from "../utils/http";
import qs from 'qs'

//获取群体内的请假请求
export function getLeaveRequest(group_id) {
    return server.get('leave', {params: {group_id}}).then(handleResponse)
}

//学生发起请假
export function check(group_id, str) {
    var form = {};
    form.append('result',str)
    form.append('group_id', group_id)
    return server.post('group/leave', form).then(handleResponse)
}