function countLessOrEqualTo(arr, value, leftBoundary, rightBoundary) {
  var count = 0;
  for (var i = leftBoundary; i < rightBoundary; i++) {
    if (arr[i] <= value) {
      count++;
    }
  }
  return count;
}

function findKSmallest(arr, k, leftBoundary, rightBoundary) {
  var left = Number.MAX_VALUE;
  var right = Number.MIN_VALUE;
  for (var i = leftBoundary; i < rightBoundary; i++) {
    const value = arr[i];
    left = Math.min(left, value);
    right = Math.max(right, value);
  }
  while (left < right) {
    var mid = Math.floor(left + ((right - left) / 2));
    if (countLessOrEqualTo(arr, mid, leftBoundary, rightBoundary) < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function findKthMinimumVulnerability(k, m, vulnerability) {
    const result = [findKSmallest(vulnerability, k, 0, m)];
    let lastK = result[0];
    for (let i = 1; i < vulnerability.length - (m - 1); i++) {
      result.push();
    }
    return result;
}

