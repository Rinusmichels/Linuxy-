function scBug() {
    let obj = null;
    console.log(obj.property);
}
```

3. *Division by Zero*: Membuat kesalahan dengan membagi angka dengan nol.
```
function scBug() {
    let result = 5 / 0;
    console.log(result);
}
```

4. *Recursion tanpa kondisi berhenti*: Membuat fungsi rekursif yang tidak memiliki kondisi berhenti yang jelas.
```
function scBug() {
    scBug();
}
