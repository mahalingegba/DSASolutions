//leetcode solutions javascript
//1.Two sum
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in map) {
      return [map[target - nums[i]], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

console.log(twoSum([5, 7, 5], 10));

//2.add Two numbers
var addTwoNumbers = function (l1, l2) {
  var carry = 0;
  var sum = 0;
  var head = new ListNode(0);
  var now = head;
  var a = l1;
  var b = l2;
  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    now.next = new ListNode(sum % 10);
    now = now.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (carry) now.next = new ListNode(carry);
  return head.next;
};

//3.remove duplicates from sorted array
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
      nums.splice(j, 1);
      j--;
    } else {
      i = j;
    }
  }
};
console.log([1, 1, 2]);
