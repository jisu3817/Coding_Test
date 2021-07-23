function solution(new_id) {
    new_id = new_id
    .toLowerCase()   // 1단계
    .replace(/[^\-_.a-z0-9]/g, '')   // 2단계
    .replace(/\.{2,}/g, '.')   // 3단계 
    .replace(/^\.|\.$/g, '')   // 4단계
    .replace(/^$/, 'a')   // 5단계
    .slice(0, 15).replace(/\.$/, '');   // 6단계
    
    const len = new_id.length;
    if (len > 2) return new_id;   // 7단계
    return new_id + new_id[len - 1].repeat(3 - len);
}

