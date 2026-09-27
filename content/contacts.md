+++
title = "Contacts"
description = "Contact the Windsboro HOA board members, committee members, or the general inbox."
eyebrow = "Get in touch"
+++

Have a question or want to get involved? Reach out to the general inbox or contact a board or committee member directly below.

<div class="general-inbox">
    <div>
        <div class="gi-label">General inquiries</div>
        <div class="gi-email">{{< general_contact >}}</div>
    </div>
</div>
<div class="row mt-3">
    <div class="col-md-6">
        <h3>Board Members</h3>
        {{< contacts file_name="contacts" contact_type="board_members" >}}
    </div>
    <div class="col-md-6">
        <h3>Committee Members</h3>
        {{< contacts file_name="contacts" contact_type="committee_members" >}}
    </div>
</div>
