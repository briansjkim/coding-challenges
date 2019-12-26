// given a sorted linked list, delete all duplicates such that each element appear only once

var deleteDuplicates = (head) => {
  var list = head;

  while (list) {
    if (list.next !== null && list.val === list.next.val) {
      list.next = list.next.next;
    } else {
      list = list.next;
    }
  }
  return head;
}
