// version: 7.12.0.a.1.3.1
// sha: 1b73e738b22d00ab2247f8d564572974b0a3bb70
function SetBookmark(){var o=window.parent,t=window.location.href;o.SetBookmark(t.substring(t.toLowerCase().lastIndexOf("/scormcontent/")+14,t.length),document.title),o.CommitData()}SetBookmark();