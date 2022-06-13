+++
title = "Contacts"
description = "These are the HOA contacts"
+++

<div align="center">
    Please contact the general inbox at: {{< general_contact >}}
</div>
<div align="center">
    <div style="width: 50%; float: left;"> 
        <h3>Board Members</h3>
        {{< contacts file_name="contacts" contact_type="board_members" >}}
    </div>
    <div style="margin-left: 50%;"> 
        <h3>Committee Members</h3>
        {{< contacts file_name="contacts" contact_type="committee_members" >}}
    </div>
</div>
