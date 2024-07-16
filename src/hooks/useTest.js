function pro(q, w) {
  q(
    setTimeout(() => {
      return "성공";
    }, 1000)
  );
}

const a = new Promise(pro);
console.log(a);
