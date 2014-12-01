{% extends '{{-app_name-}}:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "{{-app_name-}}:widget/message/message.tpl"%}
     </div>
{% endblock %}