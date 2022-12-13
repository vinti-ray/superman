let strs=["flower","flow","flight"]
let final=[]
var longestCommonPrefix = function(strs) {
        for (let i = 0; i < strs.length; i++) {
                let ans=strs[i].split("")
                final.push(ans)       
            }
            for(let i=0;i < strs.length; i++){
                for(let j=0;j<final[i].length;j++){
                    
                }
            }

    return final
};
console.log(longestCommonPrefix(strs))