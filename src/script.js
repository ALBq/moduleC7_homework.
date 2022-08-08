export function reversString(str){
    let revertStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
      revertStr += str[i];
    }
    return revertStr;
  }
