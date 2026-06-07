class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        highestWealth = 0
        for i in range(0, len(accounts)):
            wealth = 0
            for j in range(0, len(accounts[0])):
                wealth += accounts[i][j]
            if wealth > highestWealth:
                highestWealth = wealth
        return highestWealth
