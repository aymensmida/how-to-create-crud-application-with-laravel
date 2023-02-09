$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

function CopyToClipboard(containerid, btn) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().empty();
        window.getSelection().addRange(range);
        $('#' + btn).attr('data-original-title', 'Copied').tooltip('show');
    }
    setTimeout(function() {
        $('#' + btn).attr('data-original-title', 'Copy to Clipboard').tooltip('hide');
    }, 2000)
    document.execCommand("copy");
}