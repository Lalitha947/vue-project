<template>
    <h1>Leave Requests</h1>
    <table class="leave-requests"><br><br>
    <thead>
    <tr>
        <th>Employee:</th>
        <th>Leave Type:</th>
        <th>Start Date:</th>
        <th>End Date:</th>
        <th>Status:</th>
    </tr>
      
    </thead>
    <tbody class="leave-requests">
        <td>Sibongile Nkosi</td>
        <td>Sick Leave
            Personal
        </td>
        <td>2025-07-22
            <br>2024-12-01
        </td>
        <td>2025-07-22
            <br>2024-12-01
        </td>
        <td>Approved
           <br> Pending
        </td>
    </tbody>
    
    <tbody>
        <td>Lungile Moyo</td>
        <td>Family Responsibility</td>
        <td>2025-07-15
            <br>2024-12-02
        </td>
        <td>2025-07-15
            <br>2024-12-02
        </td>
        <td>Denied
            <br>Approved
        </td>
    </tbody>
     
    
</table>
</template>
<script>
import LeaveManagementC from '@/components/LeaveManagementComp.vue'
export default {

}
    
    


</script>
<style>
.leave-requests {
    width: 100%;
    border-collapse: collapse;
}
</style>