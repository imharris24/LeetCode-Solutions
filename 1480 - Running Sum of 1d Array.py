class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        runningSumList = []
        sum = 0
        for i in range(0, len(nums)):
            sum += nums[i]
            runningSumList.append(sum)
        return runningSumList
