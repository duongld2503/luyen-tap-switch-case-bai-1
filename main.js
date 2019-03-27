let brower;
brower = prompt("nhap brower");
switch (brower) {
    case 'Edge':
        alert("you're got Edge")
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert("okay we support these brower too")
        break;

    default:
        alert("we hope that this page looks ok")


}