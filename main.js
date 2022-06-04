window.onload = () => {

document.getElementById('audio').volume = 0

const canvasBody = document.getElementById('canvas')
const canvas = canvasBody.getContext('2d')


const w = canvasBody.width = 750
const h = canvasBody.height = 650


const opts = {
  pixelSize: 8
}

const color = {
  d: '#485162',
  s: '#46648d',
  c: '#4f8aa7',
  l: '#61aedc',
  m: '#3e546f',
  n: "#4b5065",
  k: '#37455d',
  f: '#14223c',
  t: '#534543',
  r: '#1a3b5d',
  o: '#413a42',
  h: '#fffdfd',
  i: '#f5e1e2',
  u: '#d4b9b3',
  q: '#1b0a16',
  g: '#f8c8ae',
  r: '#d7cdc1',
  v: '#ac9fa1',
  p: '#fbf4ef',
  j: '#2b344d',
  y: '#ffdeb9',
  u: '#c3b5af',
  z: '#ffded2',
  a: '#7a6c70',
  1: '#201628',
  2: '#2f2535',
  3: '#38313e',
  4: '#592e39',
  5: '#473e41',
  6: '#3b2938',
  7: '#65223d',
  8: '#143257',
  9: '#2a333f',
  й: '#22152d',
  '-': '#194365',
  w: '#a99c9f',
  ц: '#322937',
  к: '#20142d',
  е: '#8e0d24',
  н: '#221b2f',
  г: '#312938',
  ш: '#787c7d',
  щ: '#4a4c57',
  х: '#191e2c',
  ф: '#492e35',
  ы: '#605f5e',
  а: '#605f5e',
  п: '#563537',
  р: '#683f3d',
  о: '#7b524e',
  я: '#322a37',
  ь: '#303039',
  м: '#20142d',
  т: '#1f1b28',
}

let picture = [
  'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddddddddddddddddddddddddddd',
  'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddddddddddddddd',
  'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddddddddddd',
  'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddddddddddddd',
  'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddd',
  'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddd',
  'cccccccccccccccccccccccccccssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddd',
  'ccccccccccccccccccccccccccccccccccccsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdd',
  'ccccccccccccccccccccccccccccccccccccccccccccsssssssssssssssssssssssssssssssssssssssssssssssssssssss',
  'cccccccccccccccccccccccccccccccccccccccccccccccccssssssssssssssssssssssssssssssssssssssssssssssssss',
  'llllllllllllllllllllllcccccccccccccccccccccccccccccccccsssssssssssssssssssssssssssssssssssssssssss',
  'lllllllllllllllllllllllllllcccccccccccccccccccccccccccccccccssssssssssssssssssssssssssssssssssssss',
  'llllllllllllllllmmllllllllllllllccccccccccccccccccccccccccccccccccssssssssssssssssssssssssssssssss',
  'lllllllllllllllmmmmlllllllllllllllllllcccccccccccccccccccccccccccccccccccsssssssssssssssssssssssss',
  'llllllllllllllmmmmmmlllllllllllllllllllllllcccccccccccccccccccccccccccccccccccssssssssssssssssssss',
  'lllllllllllllmmmmmmmmlllllllllllllllllllllllllllcccccccccccccccccccccccccccccccccccccsssssssssssss',
  'llllllllllllmmmmmmmmmmmlllllllllllllllllllllllllllllcccccccccccccccccccccccccccccccccccccsssssssss',
  'lllllllllllmmmmmmmmmmmmmmlllllllllllllllllllllllllllnnccccccccccccccccccccccccccccccccccccsssss',
  'llllllllmmmmmmmmmmmmmmmmmmmllllllllllllllllllllllllnnnnccccccccccccccccccccccccccccccccccccccc',
  'llllllmmmmmmmmmmmmmmmmmmmmmmmlllllllllllllllllllllnnnnnnnccccccccccccccccccccccccccccccccccccc',
  'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmlllllllllllllllllnnnnnnnnnnlllccccccccccccccccccccctccccccccccc',
  'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmlllllllllllnnnnnnnnnnnnllllllccccccccccccccctttccccccccccc',
  'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmllllllllnnnnnnnnnnnnnnllllllllccccccccccctttttcccccccccc',
  'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmllnnnnnnnnnnnnnnnnnnllllllllllllllllltttttcccccccccc',
  'mmmmmmmmmmfmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnllllllllllllnnlltttccccccccccc',
  'mmmmmmmmmfffmmfmmmfmmmmmmmmmmmmkkkkkmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnllllllnnnnntttctctctctccc',
  'mmmmmmmmffffffffmfffmmmmmmmmmmkkkkkkkmmmmmmmmnnnnnnkkknnnnnnnnnnnnnnnnnllnnnnnnnntttttttttttccc',
  'fffffffffffffffffmffffmmmmmmmkkkkkkkkkkkkkmmmmnnnkkkkkkknnnnnnnnnnnnnnnnnnnnnnnnntttttttttttttc',
  'ffffffffffffffffffffffmmmfkkkkkkkkkkkkkkkkkkmmnnkkkkkkkkkkknnnnnnnnnnnnnnnnnnnnnntttttttttttttt',
  'ffffffffffffffffffffffmmffkkkkkkkkkkkkkkkkkkkmkkkkkkkkkkkkkkkkkknnnnnnnnnnnnnnnnntttttttttttttt',
  'fffffffffffffffffffffffmfffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkknnnnnnnnnnnnnntttttttttttttt',
  'fffffffffffffffffffffffffffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkknnnnntttttttttttttt',
  'fffffffffffffffffffffffffffffkkkffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkknooooootttttttt',
  'fffffffffffffffffffffffffffffffffffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkooooooooootttttt',
  'fffffffffffffffffffffffffffffffffffkkkffkjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkoooooooooooooooot',
  'fffffffffffffffffffffffihhifffffffffffffjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkooooooooooooooooooo',
  'ffffffffffffffffffffffiihhhiffffffffffffjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkoooooooooooooooooooo',
  'fffffffffffffffffffffiigggggfffffffffffffjffjjjjjjjkkkkkkkkkkkkkkkkkkkkkooooooooooooooooooooooo',
  'fffffffffffffffffffffiigyyyyffffffffffffffffjjjjjjjjkkkkkkkkkkkkkkkkkkoooooooooooooooooooooooo',
  'fffffffffffffffffffffiigqyyqfffffffffffffffffjjjjjjjjjjkkkkkkkkkvrrppkooooooooooooooooooooooooo',
  'fffffffffffffffffffffiigyyyyfffffffffffffffffffjjjjjjjjjjkkkkkkvuzzuppooooooooooooooooooooooooo',
  'ffffffffffffffffffffhfiihhhhfffffffffffffffffffjjjjjjjjjjjjjkkkvzzuuupooooooooooooooooooooooooo',
  'ffffffffffffffffffffifiihiihffffffffffffffffffffjjjjjjjjjjjjkkkkzzuuuppoooooooooooooooooooooooo',
  'fffffffffffffffffffifffiiiiiffffffffffffffffffffffjjjjjjjjjjjjkkzzuuuppoooooooooooooooooooooooo',
  'ffffffffffffffffffffffa12a15ffffffffffffffffffffffjjjjjjjjjjjjkkzquuuppoooooooooooooooooooooooo',
  'ffffffffffffffffffffffa1331affffffffffffffffffffffjjjjjjjjjjjjkkzzuuuppooooooooooooooooooooooooo',
  'fffffffffffffffffffaaaa1221aaaafffffffffffffffffffjjjjjjjjjjjjkkzzzuzpooooooooooooooooooooooooo',
  'ffffffffffffffffffa555334334555affffffffffffffffffjjjjjjjjjjjjjkzzzguoooooooooooooooooooooooooo',
  'ffffffffffffffffffa533333433355affffffffffffffffffjjjjjjjjjjjjjkkkgggoooooooooooooooooooooooooo',
  '88888888888888888855334343334558888fffffffffffffffjjjjjjjjjjjjjjkk6679цoooooooooooooooooooooooo',
  '8888888888888888885533333433355888888888888888888888888888888888886799йц88888888888888888888888',
  '88888888888888888855334333333558888888888888888888888888888888w8886799йцц8888888888888888888888',
  '8888888888888888885544333w333558888888888888888888888888888888w8886799ййц8888888888888888888888',
  '8888888888888888885533333w33355888888888888888888888888888888www887999ййц8888888888888888888888',
  '8888888888888888885533ккwww3555888-88888-8888888888-888-8888ккwкк8799йййц8888888888888888888888',
  '8888888888888888885555ккккк3к5588-88-88888-88888888888888888ккеек8799йййц8888888888888888888888',
  '8888888888888888885555ккккккк558888-888-88888-88-8--88-8-888ннн99999ййййц8888888888888888888888',
  '888888888888888888щгггггwwwкк5гш88------888---88-----8-88888ннн9999йййййй8888888888888888888888',
  '88888888888888888щггггггеееккгггш------------------------8-8н777777ффйййй8888888888888888888888',
  '8888888888888888щфггггггеее33ггггш--------------------------н77ккккййффйй88888х8888888888888888',
  '8888888888х8888щффггггыыыыыщщщггфш---------------------------ккккккййййфй8888хх888888888888х888',
  '8888888888хх8х8щффффыыыыыыыыыщщгффш--------------------------ккккккйййййф888хххх8888х88888х888х',
  '88888х88хххх88хщяяяыыыыыыыыыыыщфффш--------ппро-о-------х----99хккйййййййшшшхххххх8хх888х8х88хх',
  '88888х8хххххх8щщяяяыыыыыщыыыыыщяяяш---х-----ппрр-о----х-ххх--99хььййййййыыыышшххххххх8888хххххх',
  '8888хххххххххщщыяяяыыыщщыыыыыыщяяяшшххх----х-пр---охх-ххххххх99хььххщыыыыыыщыышхххххххх8ххххххх',
  '888ххххххххххщщыяяяыыщыыщщыыыыщяяящшххх---хх-пр--хохххххххххх99хккххщыыыыыщыыышхххххххххххххххх',
  '8ххххххххххххщщыяяяыыыщыыыщыыыщяяящшххххх-ххппроххоххххххххххммхккххщыыыыщыыыыышшхххххххххххххх',
  'ххххххххххххтщщыяяяыщыыыыыыыщыщяяящшхххххххппрррохоххххххххххммхккхщыыыыыщыщыыыышшххххххххххххх',
  'хххххххххххттщщыяяяыщыыыыыыыыыщяяящшхххххххпрррррхоххххххххххммхккхщыыыыыыыыыщыыышшхххххххххххх',
  'хххххххххттттщщыяяяыыыыыыыыыыыщяяящшхххххххпрррррхоххххххххххммхккхщыыщыыыыщыыыыыышшххххххххххх',
  'хххххххххттттттщяяяыыыыыыыыыыыщяяяхххххххххпрррррроххххххххххммхккхщыыыыыыщыыыыыыышшххххххххххх',
  'ххххххттттттттттяяяыыыыыыыыытттяяяхххххххххппррррххххххххххххммтккхщыыыыыщыыыыыыыышшххххххххххх',
  'ххххххттттттттттяяяттттыыытттттяяяхххххххххпппрроххххххттттттммткктщыыыыыыщщыыыыыышшххххххххххх',
  'хххххххххттттяяяяяттттттттттттттяяяяяхххххххппппххтттттттттттммккктхщыыыыыыыыыыыыышхххххххххххх',
  'хххххххххххххххххххххххххххттттттттттххххххххххххххххттттттмммтттттттттхххххххххххххххххххххххххххххххххххххххх',
  'ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
  'хххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
  'хххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
  'хххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
  'ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
]

function initArt(picture) {

  for (let i = 0; i < picture.length; i++) {

    for (let f = 0; f < picture[i].length; f++) {
      newRect(f, i, color[picture[i][f]])
    }
  }
}

function newRect(col, row, color) {

  canvas.clearRect(0, 0, canvas.width, canvas.height)

  canvas.fillStyle = color;
  canvas.fillRect(col * opts.pixelSize, row * opts.pixelSize, opts.pixelSize, opts.pixelSize);
}

function initArt1(picture, x, y) {

  for (let i = 0; i < picture.length; i++) {

    for (let f = 0; f < picture[i].length; f++) {
      newRect1(f, i, color[picture[i][f]], x, y)
    }
  }
}

function newRect1(col, row, color, x, y) {
  canvas.fillStyle = color;
  canvas.fillRect((col + x) * opts.pixelSize, (row + y) * opts.pixelSize, opts.pixelSize, opts.pixelSize);
}


initArt(picture)
requestAnimationFrame(tick)


let y = 0

const arr = [
  [0, 0], [0, 200], [0, 400], [0, 600],
  [0, 800], [0, 1000], [0, 5000], [0, 1000], [0, 1400], [0, 1800], [0, 2200], [0, 2600], [0, 3000], [0, 3400], [0, 3800], [0, 4200],
  [0, 5000], [0, 5400], [0, 5800], [0, 6000], [0, 7600], [0, 8000], [0, 8800], [0, 9400], [0, 9800], [0, 10200], [0, 10600],
  [0, 11000], [0, 11400], [0, 11800], [0, 12200], [0, 12600], [0, 13000], [0, 13400], [0, 14800], [0, 15200], [0, 16400], [0, 167950],
  [0, 17200], [0, 17400], [0, 17800], [0, 18200], [0, 18600], [0, 19000], [0, 20600], [0, 21000], [0, 21400], [0, 21800], [0, 22000],
  [0, 22400], [0, 22800], [0, 23200], [0, 23400], [0, 24800], [0, 25200], [0, 25600], [0, 26000], [0, 26400], [0, 26600], [0, 28200],
  [0, 28600], [0, 29000], [0, 29800], [0, 30200], [0, 30600], [0, 31000], [0, 32400], [0, 32600], [0, 33000], [0, 34400], [0, 34800],
  [0, 34600], [0, 35000], [0, 35400], [0, 35800], [0, 36200], [0, 36600], [0, 38400], [0, 38800], [0, 39200], [0, 39600], [0, 40800],
  [0, 41200], [0, 41600], [0, 42000], [0, 43000], [0, 43400], [0, 43800], [0, 44200], [0, 44600], [0, 44800], [0, 45400], [0, 45800],
  [0, 46200], [0, 46600], [0, 47000], [0, 47400], [0, 47800], [0, 48200], [0, 48600], [0, 48800], [0, 49600], [0, 50000], [0, 50400],
  [0, 50800], [0, 51200], [0, 51600], [0, 52000], [0, 52400], [0, 52800], [0, 55000], [0, 56200], [0, 56600], [0, 57000], [0, 57400],
  [0, 57800], [0, 58000], [0, 58800], [0, 59200], [0, 59600], [0, 60000],
]


function tick(now) {

  let diff = now - y
  y = now
  console.log(diff);

  arr.forEach(el => {
    if (el[0] !== false) {
      el[0] = (now - el[1]) / 200
    }
  })


  if (arr[0][0] <= 1 && arr[0][0] >= 0) {

    initArt1([
      'fffh',
      'ffii',
      'ffff',
    ], 17, 41)

    initArt1([
      '8888',
      '88х8',
      '88х8',
    ], 5, 62)

    initArt1([
      '---',
      '--',
      '-х',
    ], 39, 63)

    initArt1([
      '----',
      '-х',
      '-ххх',
    ], 35, 63)

    initArt1([
      '----',
      '--х',
      '--х',
    ], 52, 63)

    initArt1([
      '---',
      '--',
      'хх',
    ], 56, 61)

    initArt1([
      '888',
      '8х8',
      '8хх',
    ], 76, 59)

    initArt1([
      '888',
      '8х8',
      '8хх',
    ], 82, 60)

    initArt1([
      '888',
      '88х',
      '88х',
    ], 89, 60)
  }

  if (arr[0][0] > 1) {
    arr[0][1] = now + 800
  }

  if (arr[1][0] <= 1 && arr[1][0] >= 0) {
    initArt1([
      'fffh',
      'fffi',
      'ffif',
    ], 17, 41)

    initArt1([
      '8х88',
      '88х8',
      '88х8',
    ], 5, 62)

    initArt1([
      '8888',
      '8х88',
      '88х8',
    ], 7, 60)

    initArt1([
      '8888',
      'х888',
      '8х',
    ], 1, 62)

    initArt1([
      'х--',
      '-х',
      '-х',
    ], 39, 63)

    initArt1([
      'хх--',
      '-х',
      '-хх',
    ], 35, 63)

    initArt1([
      '-х--',
      '--х',
      '--х',
    ], 52, 63)

    initArt1([
      '888',
      'х88',
      '8хх',
    ], 76, 59)

    initArt1([
      '8х8',
      '888',
      '8хх',
    ], 82, 60)

    initArt1([
      '8х8',
      '88х',
      '88х',
    ], 89, 60)
  }

  if (arr[1][0] > 1) {
    arr[1][1] = now + 800
  }

  if (arr[2][0] <= 1 && arr[2][0] >= 0) {
    initArt1([
      'fffh',
      'ffif',
      'fiff',
    ], 17, 41)

    initArt1([
      'х888',
      '8х88',
      '88х8',
    ], 5, 62)

    initArt1([
      '8х88',
      '8888',
      '88х8',
    ], 7, 60)

    initArt1([
      '8888',
      '8х88',
      '8х',
    ], 1, 62)

    initArt1([
      '-х-',
      '---',
      '-х',
      '-х',
    ], 39, 63)

    initArt1([
      'х---',
      'хх-',
      '-хх',
    ], 35, 63)

    initArt1([
      '-х--',
      '-х-',
      '--х',
    ], 52, 63)

    initArt1([
      '---',
      'х-',
      'хх',
    ], 56, 61)

    initArt1([
      'х88',
      '8х8',
      '8хх',
    ], 76, 59)

    initArt1([
      'х88',
      '888',
      '8хх',
    ], 82, 60)

    initArt1([
      'х88',
      '8х8',
      '88х',
    ], 89, 60)
  }

  if (arr[2][0] > 1) {
    arr[2][1] = now + 800
  }

  if (arr[3][0] <= 1 && arr[3][0] >= 0) {
    initArt1([
      'ffih',
      'fiff',
      'ffff',
    ], 17, 41)

    initArt1([
      '8х88',
      '88х8',
      '88х8',
    ], 5, 62)

    initArt1([
      '8888',
      '8х88',
      '88х8',
    ], 7, 60)

    initArt1([
      '8888',
      '8х88',
      '88',
    ], 1, 62)

    initArt1([
      'х-',
      '---',
      '-х',
      '-хх',
    ], 39, 63)

    initArt1([
      '--х-',
      '-х-',
      '--х',
    ], 52, 63)

    initArt1([
      'х--',
      '--',
      'хх',
    ], 56, 61)

    initArt1([
      '8х8',
      '8х8',
      '8хх',
    ], 76, 59)

    initArt1([
      '888',
      'х88',
      '8хх',
    ], 82, 60)

    initArt1([
      'х88',
      '8х8',
      '8х8',
    ], 89, 60)
  }

  if (arr[3][0] > 1) {
    arr[3][1] = now + 800
  }

  if (arr[4][0] <= 1 && arr[4][0] >= 0) {
    initArt1([
      'fiih',
      'ffff',
      'ffff',
    ], 17, 41)

    initArt1([
      '8888',
      '88х8',
      '88х8',
    ], 5, 62)

    initArt1([
      '8х88',
      '8888',
      '88х8',
    ], 7, 60)

    initArt1([
      '8888',
      'х888',
      '8х',
    ], 1, 62)

    initArt1([
      '----',
      'х--',
      '--х',
    ], 52, 63)

    initArt1([
      '---',
      'х-',
      'хх',
    ], 56, 61)

    initArt1([
      '888',
      '8х8',
      '8хх',
    ], 82, 60)

    initArt1([
      '888',
      '888',
      '8х8',
    ], 89, 60)

  }

  if (arr[4][0] > 1) {
    arr[4][1] = now + 800
  }

  if (arr[5][0] <= 1 && arr[5][0] >= 0) {
    initArt1([
      'yyyy',
    ], 24, 39)
  }

  if (arr[5][0] > 1) {
    arr[5][1] = now + 5000
    initArt1([
      'qyyq',
    ], 24, 39)
  }

  if (arr[6][0] <= 1 && arr[6][0] >= 0) {
    initArt1([
      'y',
    ], 65, 44)
  }

  if (arr[6][0] > 1) {
    arr[6][1] = now + 7500
    initArt1([
      'q',
    ], 65, 44)
  }

  if (arr[7][0] && arr[7][0] <= 1 && arr[7][0] >= 0) {
    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[7][0] > 1) {
    arr[7][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[8][0] && arr[8][0] <= 1 && arr[8][0] >= 0) {
    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[8][0] > 1) {
    arr[8][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[9][0] && arr[9][0] <= 1 && arr[9][0] >= 0) {
    initArt1([
      'hhq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[9][0] > 1) {
    arr[9][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[10][0] && arr[10][0] <= 1 && arr[10][0] >= 0) {
    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  // if (arr[10][0] > 1) {
  //   initArt1([
  //     'hqq',
  //     'iii',
  //     'iii',
  //   ], 24, 42)
  // }

  if (arr[11][0] && arr[11][0] <= 1 && arr[11][0] >= 0) {
    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[11][0] > 1) {
    arr[11][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[12][0] && arr[12][0] <= 1 && arr[12][0] >= 0) {
    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[12][0] > 1) {
    arr[12][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[13][0] && arr[13][0] <= 1 && arr[13][0] >= 0) {
    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[13][0] > 1) {
    arr[13][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }


  if (arr[14][0] && arr[14][0] <= 1 && arr[14][0] >= 0) {
    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[14][0] > 1) {
    arr[14][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[16][0] && arr[16][0] <= 1 && arr[16][0] >= 0) {
    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[16][0] > 1) {
    arr[16][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[17][0] && arr[17][0] <= 1 && arr[17][0] >= 0) {
    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[17][0] > 1) {
    arr[17][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[18][0] && arr[18][0] <= 1 && arr[18][0] >= 0) {
    initArt1([
      'hhq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[18][0] > 1) {
    arr[18][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[19][0] && arr[19][0] <= 1 && arr[19][0] >= 0) {
    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[19][0] > 1) {
    arr[19][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[20][0] && arr[20][0] <= 1 && arr[20][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[20][0] > 1) {
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
    arr[20][0] = false
  }

  if (arr[21][0] && arr[21][0] <= 1 && arr[21][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[21][0] > 1) {
    arr[21][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[22][0] && arr[22][0] <= 1 && arr[22][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[22][0] > 1) {
    arr[22][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[23][0] && arr[23][0] <= 1 && arr[23][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[23][0] > 1) {
    arr[23][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[24][0] && arr[24][0] <= 1 && arr[24][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[24][0] > 1) {
    arr[24][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[25][0] && arr[25][0] <= 1 && arr[25][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[25][0] > 1) {
    arr[25][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[26][0] && arr[26][0] <= 1 && arr[26][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[26][0] > 1) {
    arr[26][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[27][0] && arr[27][0] <= 1 && arr[27][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[27][0] > 1) {
    arr[27][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[28][0] && arr[28][0] <= 1 && arr[28][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }


  if (arr[29][0] && arr[29][0] <= 1 && arr[29][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[29][0] > 1) {
    arr[29][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[30][0] && arr[30][0] <= 1 && arr[30][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[30][0] > 1) {
    arr[30][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[31][0] && arr[31][0] <= 1 && arr[31][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[31][0] > 1) {
    arr[31][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }



  if (arr[32][0] && arr[32][0] <= 1 && arr[32][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }



  if (arr[33][0] && arr[33][0] <= 1 && arr[33][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[33][0] > 1) {
    arr[33][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }


  if (arr[34][0] && arr[34][0] <= 1 && arr[34][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }


  if (arr[34][0] > 1) {
    arr[34][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }


  if (arr[35][0] && arr[35][0] <= 1 && arr[35][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[35][0] > 1) {
    arr[35][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[36][0] && arr[36][0] <= 1 && arr[36][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[36][0] > 1) {
    arr[36][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[37][0] && arr[37][0] <= 1 && arr[37][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[37][0] > 1) {
    arr[37][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[38][0] && arr[38][0] <= 1 && arr[38][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[38][0] > 1) {
    arr[38][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[39][0] && arr[39][0] <= 1 && arr[39][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[39][0] > 1) {
    arr[39][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[40][0] && arr[40][0] <= 1 && arr[40][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[40][0] > 1) {
    arr[40][0] = false
    initArt1([
      'z',
      'zzzz',
    ], 64, 46)
  }

  if (arr[41][0] && arr[41][0] <= 1 && arr[41][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[41][0] > 1) {
    arr[41][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[42][0] && arr[42][0] <= 1 && arr[42][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[42][0] > 1) {
    arr[42][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[43][0] && arr[43][0] <= 1 && arr[43][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[43][0] > 1) {
    arr[43][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[44][0] && arr[44][0] <= 1 && arr[44][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[44][0] > 1) {
    arr[44][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[45][0] && arr[45][0] <= 1 && arr[45][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[45][0] > 1) {
    arr[45][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[46][0] && arr[46][0] <= 1 && arr[46][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[46][0] > 1) {
    arr[46][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[47][0] && arr[47][0] <= 1 && arr[47][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[47][0] > 1) {
    arr[47][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[48][0] && arr[48][0] <= 1 && arr[48][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[48][0] > 1) {
    arr[48][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[49][0] && arr[49][0] <= 1 && arr[49][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[49][0] > 1) {
    arr[49][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[50][0] && arr[50][0] <= 1 && arr[50][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[50][0] > 1) {
    arr[50][0] = false
    initArt1([
      'z',
      'zzzz',
    ], 64, 46)
  }

  if (arr[51][0] && arr[51][0] <= 1 && arr[51][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[51][0] > 1) {
    arr[51][0] = false
    initArt1([
      'z',
      'zzzz',
    ], 64, 46)
  }

  if (arr[52][0] && arr[52][0] <= 1 && arr[52][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[52][0] > 1) {
    arr[52][0] = false
    initArt1([
      'z',
      'zzzz',
    ], 64, 46)
  }

  if (arr[53][0] && arr[53][0] <= 1 && arr[53][0] >= 0) {
    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[53][0] > 1) {
    arr[53][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[54][0] && arr[54][0] <= 1 && arr[54][0] >= 0) {

    initArt1([
      'hhq',
      'iii',
      'iii',
    ], 24, 42)
  }

  // if (arr[54][0] > 1) {
  //   arr[54][0] = false
  //   initArt1([
  //     'hii',
  //     'iii',
  //     '2a1',
  //   ], 24, 42)

  // }

  if (arr[55][0] && arr[55][0] <= 1 && arr[55][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[55][0] > 1) {
    arr[55][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }


  if (arr[56][0] && arr[56][0] <= 1 && arr[56][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[56][0] > 1) {
    arr[56][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)

  }


  if (arr[57][0] && arr[57][0] <= 1 && arr[57][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[57][0] > 1) {
    arr[57][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }


  if (arr[58][0] && arr[58][0] <= 1 && arr[58][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[58][0] > 1) {
    arr[58][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }


  if (arr[59][0] && arr[59][0] <= 1 && arr[59][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[59][0] > 1) {
    arr[59][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[60][0] && arr[60][0] <= 1 && arr[60][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[60][0] > 1) {
    arr[60][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }

  if (arr[61][0] && arr[61][0] <= 1 && arr[61][0] >= 0) {
    initArt1([
      'k',
      'zzzz',
    ], 64, 46)
  }

  if (arr[61][0] > 1) {
    arr[61][0] = false
    initArt1([
      'z',
      'zzzg',
    ], 64, 46)
  }


  if (arr[62][0] && arr[62][0] <= 1 && arr[62][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[62][0] > 1) {
    arr[62][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }



  if (arr[63][0] && arr[63][0] <= 1 && arr[63][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[63][0] > 1) {
    arr[63][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }



  if (arr[64][0] && arr[64][0] <= 1 && arr[64][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[64][0] > 1) {
    arr[64][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }



  if (arr[65][0] && arr[65][0] <= 1 && arr[65][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[65][0] > 1) {
    arr[65][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }


  if (arr[66][0] && arr[66][0] <= 1 && arr[66][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[66][0] > 1) {
    arr[66][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }



  if (arr[67][0] && arr[67][0] <= 1 && arr[67][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  // if (arr[67][0] > 1) {
  //   arr[67][0] = false
  //   initArt1([
  //     'hii',
  //     'iii',
  //     '2a1',
  //   ], 24, 42)
  // }

  if (arr[68][0] && arr[68][0] <= 1 && arr[68][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[68][0] > 1) {
    arr[68][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[69][0] && arr[69][0] <= 1 && arr[69][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[69][0] > 1) {
    arr[69][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }


  if (arr[70][0] && arr[70][0] <= 1 && arr[70][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[70][0] > 1) {
    arr[70][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }


  if (arr[71][0] && arr[71][0] <= 1 && arr[71][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[71][0] > 1) {
    arr[71][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }


  if (arr[72][0] && arr[72][0] <= 1 && arr[72][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[72][0] > 1) {
    arr[72][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }


  if (arr[73][0] && arr[73][0] <= 1 && arr[73][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[73][0] > 1) {
    arr[73][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }


  if (arr[74][0] && arr[74][0] <= 1 && arr[74][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[74][0] > 1) {
    arr[74][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }


  if (arr[75][0] && arr[75][0] <= 1 && arr[75][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[75][0] > 1) {
    arr[75][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }


  if (arr[76][0] && arr[76][0] <= 1 && arr[76][0] >= 0) {

    initArt1([
      'hhq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[76][0] > 1) {
    arr[76][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[77][0] && arr[77][0] <= 1 && arr[77][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[77][0] > 1) {
    arr[77][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[78][0] && arr[78][0] <= 1 && arr[78][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[78][0] > 1) {
    arr[78][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[79][0] && arr[79][0] <= 1 && arr[79][0] >= 0) {

    initArt1([
      'hhq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[79][0] > 1) {
    arr[79][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[80][0] && arr[80][0] <= 1 && arr[80][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[80][0] > 1) {
    arr[80][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[81][0] && arr[81][0] <= 1 && arr[81][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[81][0] > 1) {
    arr[81][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[82][0] && arr[82][0] <= 1 && arr[82][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[82][0] > 1) {
    arr[82][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[83][0] && arr[83][0] <= 1 && arr[83][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[83][0] > 1) {
    arr[83][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[84][0] && arr[84][0] <= 1 && arr[84][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[84][0] > 1) {
    arr[84][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[85][0] && arr[85][0] <= 1 && arr[85][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[85][0] > 1) {
    arr[85][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[86][0] && arr[86][0] <= 1 && arr[86][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[86][0] > 1) {
    arr[86][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[87][0] && arr[87][0] <= 1 && arr[87][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[87][0] > 1) {
    arr[87][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[88][0] && arr[88][0] <= 1 && arr[88][0] >= 0) {

    initArt1([
      'hhq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[88][0] > 1) {
    arr[88][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[89][0] && arr[89][0] <= 1 && arr[89][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[89][0] > 1) {
    arr[89][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[90][0] && arr[90][0] <= 1 && arr[90][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[90][0] > 1) {
    arr[90][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[91][0] && arr[91][0] <= 1 && arr[91][0] >= 0) {

    initArt1([
      'hhq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[91][0] > 1) {
    arr[91][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[92][0] && arr[92][0] <= 1 && arr[92][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[92][0] > 1) {
    arr[92][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[93][0] && arr[93][0] <= 1 && arr[93][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[93][0] > 1) {
    arr[93][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[94][0] && arr[94][0] <= 1 && arr[94][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[94][0] > 1) {
    arr[94][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[95][0] && arr[95][0] <= 1 && arr[95][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[95][0] > 1) {
    arr[95][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[96][0] && arr[96][0] <= 1 && arr[96][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[96][0] > 1) {
    arr[96][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[97][0] && arr[97][0] <= 1 && arr[97][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[97][0] > 1) {
    arr[97][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[98][0] && arr[98][0] <= 1 && arr[98][0] >= 0) {

    initArt1([
      'hhq',
      'iii',
      'iii',
    ], 24, 42)
  }

  // if (arr[98][0] > 1) {
  //   arr[98][0] = false
  //   initArt1([
  //     'hii',
  //     'iii',
  //     '2a1',
  //   ], 24, 42)
  // }

  if (arr[99][0] && arr[99][0] <= 1 && arr[99][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[99][0] > 1) {
    arr[99][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[100][0] && arr[100][0] <= 1 && arr[100][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[100][0] > 1) {
    arr[100][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[101][0] && arr[101][0] <= 1 && arr[101][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[101][0] > 1) {
    arr[101][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[102][0] && arr[102][0] <= 1 && arr[102][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  // if (arr[102][0] > 1) {
  //   arr[102][0] = false
  //   initArt1([
  //     'hii',
  //     'iii',
  //     '2a1',
  //   ], 24, 42)
  // }

  if (arr[103][0] && arr[103][0] <= 1 && arr[103][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[103][0] > 1) {
    arr[103][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[104][0] && arr[104][0] <= 1 && arr[104][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[104][0] > 1) {
    arr[104][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[105][0] && arr[105][0] <= 1 && arr[105][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[105][0] > 1) {
    arr[105][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[106][0] && arr[106][0] <= 1 && arr[106][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[106][0] > 1) {
    arr[106][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[107][0] && arr[107][0] <= 1 && arr[107][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  // if (arr[107][0] > 1) {
  //   arr[107][0] = false
  //   initArt1([
  //     'hii',
  //     'iii',
  //     '2a1',
  //   ], 24, 42)
  // }

  if (arr[108][0] && arr[108][0] <= 1 && arr[108][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[108][0] > 1) {
    arr[108][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[109][0] && arr[109][0] <= 1 && arr[109][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[109][0] && arr[109][0] <= 1 && arr[109][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }


  if (arr[109][0] > 1) {
    arr[109][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[110][0] && arr[110][0] <= 1 && arr[110][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[110][0] > 1) {
    arr[110][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[111][0] && arr[111][0] <= 1 && arr[111][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[111][0] > 1) {
    arr[111][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[112][0] && arr[112][0] <= 1 && arr[112][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[112][0] > 1) {
    arr[112][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[113][0] && arr[113][0] <= 1 && arr[113][0] >= 0) {

    initArt1([
      'hhq',
      'iii',
      'iii',
    ], 24, 42)
  }

  // if (arr[113][0] > 1) {
  //   arr[113][0] = false
  //   initArt1([
  //     'hii',
  //     'iii',
  //     '2a1',
  //   ], 24, 42)
  // }

  if (arr[114][0] && arr[114][0] <= 1 && arr[114][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[114][0] > 1) {
    arr[114][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[115][0] && arr[115][0] <= 1 && arr[115][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[115][0] > 1) {
    arr[115][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[116][0] && arr[116][0] <= 1 && arr[116][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[116][0] > 1) {
    arr[116][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[117][0] && arr[117][0] <= 1 && arr[117][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[117][0] > 1) {
    arr[117][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[118][0] && arr[118][0] <= 1 && arr[118][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[118][0] > 1) {
    arr[118][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  if (arr[119][0] && arr[119][0] <= 1 && arr[119][0] >= 0) {

    initArt1([
      'hqq',
      'iii',
      'iii',
    ], 24, 42)
  }

  if (arr[119][0] > 1) {
    arr[119][0] = false
    initArt1([
      'hii',
      'iii',
      '2a1',
    ], 24, 42)
  }

  requestAnimationFrame(tick)
}


// if (now + a >= 0 && now + a <= 1 * 500) {
//   let diff = (1 * 500) - (now + a)
//   if (diff <= 50) {
//     a = -(now + 1000)
//   }

//   initArt(picture)
// }

// if (now + t >= 1 * 500 && now + t <= 2 * 500) {

//   let diff = (2 * 500) - (now + t)

//   if (diff <= 50) {
//     t = -(now + 500)
//   }

//   initArt([
//     'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddddddddddddddddddddddddddd',
//     'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddddddddddddddd',
//     'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddddddddddd',
//     'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddddddddddddd',
//     'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddd',
//     'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddd',
//     'cccccccccccccccccccccccccccssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddd',
//     'ccccccccccccccccccccccccccccccccccccsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdd',
//     'ccccccccccccccccccccccccccccccccccccccccccccsssssssssssssssssssssssssssssssssssssssssssssssssssssss',
//     'cccccccccccccccccccccccccccccccccccccccccccccccccssssssssssssssssssssssssssssssssssssssssssssssssss',
//     'llllllllllllllllllllllcccccccccccccccccccccccccccccccccsssssssssssssssssssssssssssssssssssssssssss',
//     'lllllllllllllllllllllllllllcccccccccccccccccccccccccccccccccssssssssssssssssssssssssssssssssssssss',
//     'llllllllllllllllmmllllllllllllllccccccccccccccccccccccccccccccccccssssssssssssssssssssssssssssssss',
//     'lllllllllllllllmmmmlllllllllllllllllllcccccccccccccccccccccccccccccccccccsssssssssssssssssssssssss',
//     'llllllllllllllmmmmmmlllllllllllllllllllllllcccccccccccccccccccccccccccccccccccssssssssssssssssssss',
//     'lllllllllllllmmmmmmmmlllllllllllllllllllllllllllcccccccccccccccccccccccccccccccccccccsssssssssssss',
//     'llllllllllllmmmmmmmmmmmlllllllllllllllllllllllllllllcccccccccccccccccccccccccccccccccccccsssssssss',
//     'lllllllllllmmmmmmmmmmmmmmlllllllllllllllllllllllllllnnccccccccccccccccccccccccccccccccccccsssss',
//     'llllllllmmmmmmmmmmmmmmmmmmmllllllllllllllllllllllllnnnnccccccccccccccccccccccccccccccccccccccc',
//     'llllllmmmmmmmmmmmmmmmmmmmmmmmlllllllllllllllllllllnnnnnnnccccccccccccccccccccccccccccccccccccc',
//     'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmlllllllllllllllllnnnnnnnnnnlllccccccccccccccccccccctccccccccccc',
//     'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmlllllllllllnnnnnnnnnnnnllllllccccccccccccccctttccccccccccc',
//     'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmllllllllnnnnnnnnnnnnnnllllllllccccccccccctttttcccccccccc',
//     'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmllnnnnnnnnnnnnnnnnnnllllllllllllllllltttttcccccccccc',
//     'mmmmmmmmmmfmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnllllllllllllnnlltttccccccccccc',
//     'mmmmmmmmmfffmmfmmmfmmmmmmmmmmmmkkkkkmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnllllllnnnnntttctctctctccc',
//     'mmmmmmmmffffffffmfffmmmmmmmmmmkkkkkkkmmmmmmmmnnnnnnkkknnnnnnnnnnnnnnnnnllnnnnnnnntttttttttttccc',
//     'fffffffffffffffffmffffmmmmmmmkkkkkkkkkkkkkmmmmnnnkkkkkkknnnnnnnnnnnnnnnnnnnnnnnnntttktttktttttc',
//     'ffffffffffffffffffffffmmmfkkkkkkkkkkkkkkkkkkmmnnkkkkkkkkkkknnnnnnnnnnnnnnnnnnnnnnttktkkkktktttt',
//     'ffffffffffffffffffffffmmffkkkkkkkkkkkkkkkkkkkmkkkkkkkkkkkkkkkkkknnnnnnnnnnnnnnnnntttktntntttttt',
//     'fffffffffffffffffffffffmfffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkknnnnnnnnnnnnnntkttttkttttttt',
//     'fffffffffffffffffffffffffffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkknnnnntkkttttttttttt',
//     'fffffffffffffffffffffffffffffkkkffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkknooooootttttttt',
//     'fffffffffffffffffffffffffffffffffffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkooooooooootttttt',
//     'fffffffffffffffffffffffffffffffffffkkkffkjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkoooooooooooooooot',
//     'fffffffffffffffffffffffihhifffffffffffffjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkooooooooooooooooooo',
//     'ffffffffffffffffffffffiihhhiffffffffffffjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkoooooooooooooooooooo',
//     'fffffffffffffffffffffiigggggfffffffffffffjffjjjjjjjkkkkkkkkkkkkkkkkkkkkkooooooooooooooooooooooo',
//     'fffffffffffffffffffffiigyyyyffffffffffffffffjjjjjjjjkkkkkkkkkkkkvrrpkkkoooooooooooooooooooooooo',
//     'fffffffffffffffffffffiigqyyqfffffffffffffffffjjjjjjjjjjkkkkkkkkvuuuppkooooooooooooooooooooooooo',
//     'fffffffffffffffffffffiigyyyyfffffffffffffffffffjjjjjjjjjjkkkkkkvuzzuppooooooooooooooooooooooooo',
//     'ffffffffffffffffffffhfiihhhhfffffffffffffffffffjjjjjjjjjjjjjkkkvzzuuupooooooooooooooooooooooooo',
//     'fffffffffffffffffffiffiihiihffffffffffffffffffffjjjjjjjjjjjjkkkkzzuuuppoooooooooooooooooooooooo',
//     'ffffffffffffffffffiffffiiiiiffffffffffffffffffffffjjjjjjjjjjjjkkzquuuppoooooooooooooooooooooooo',
//     'ffffffffffffffffffffffa12a15ffffffffffffffffffffffjjjjjjjjjjjjkkzzuuuppoooooooooooooooooooooooo',
//     'ffffffffffffffffffffffa1331affffffffffffffffffffffjjjjjjjjjjjjjjzzuuuppooooooooooooooooooooooooo',
//     'fffffffffffffffffffaaaa1221aaaafffffffffffffffffffjjjjjjjjjjjjkkzzzuzpooooooooooooooooooooooooo',
//     'ffffffffffffffffffa555334334555affffffffffffffffffjjjjjjjjjjjjkkzzzzuoooooooooooooooooooooooooo',
//     'ffffffffffffffffffa533333433355affffffffffffffffffjjjjjjjjjjjjjkkkgggoooooooooooooooooooooooooo',
//     '88888888888888888855334343334558888fffffffffffffffjjjjjjjjjjjjjjkk6679цoooooooooooooooooooooooo',
//     '8888888888888888885533333433355888888888888888888888888888888888886799йц88888888888888888888888',
//     '88888888888888888855334333333558888888888888888888888888888888w8886799йцц8888888888888888888888',
//     '8888888888888888885544333w333558888888888888888888888888888888w8886799ййц8888888888888888888888',
//     '8888888888888888885533333w33355888888888888888888888888888888www887999ййц8888888888888888888888',
//     '8888888888888888885533ккwww3555888-88888-8888888888-888-8888ккwкк8799йййц8888888888888888888888',
//     '8888888888888888885555ккккк3к5588-88-88888-88888888888888888ккеек8799йййц8888888888888888888888',
//     '8888888888888888885555ккккккк558888-888-88888-88-8--88-8-888ннн99999ййййц8888888888888888888888',
//     '888888888888888888щгггггwwwкк5гш88------888---88-----8-88888ннн9999йййййй8888888888888888888888',
//     '88888888888888888щггггггеееккгггш------------------------8-8н777777ффйййй8888888888888888888888',
//     '8888888888888888щфггггггеее33ггггш--------------------------н77ккккййффйй88888х8888888888888888',
//     '8888888888х8888щффггггыыыыыщщщггфш---------------------------ккккккййййфй8888хх888888888888х888',
//     '8888888888хх8х8щффффыыыыыыыыыщщгффш--------------------------ккккккйййййф888хххх8888х88888х888х',
//     '888ххх88хххх88хщяяяыыыыыыыыыыыщфффш----х---ппро-о-------х----99хккйййййййшшшхххххх8хх888х8х88хх',
//     '88888х8хххххх8щщяяяыыыыыщыыыыыщяяяш---х-----ппрр-о----х-ххх--99хььййййййыыыышшххххххх8888хххххх',
//     '8888хххххххххщщыяяяыыыщщыыыыыыщяяяшшххх----х-пр---охх-ххххххх99хььххщыыыыыыщыышхххххххх8ххххххх',
//     '888ххххххххххщщыяяяыыщыыщщыыыыщяяящшххх--ххх-пр--хохххххххххх99хккххщыыыыыщыыышхххххххххххххххх',
//     '8ххххххххххххщщыяяяыыыщыыыщыыыщяяящшххххх-ххппроххоххххххххххммхккххщыыыыщыыыыышшхххххххххххххх',
//     'ххххххххххххтщщыяяяыщыыыыыыыщыщяяящшхххххххппрррохоххххххххххммхккхщыыыыыщыщыыыышшххххххххххххх',
//     'хххххххххххттщщыяяяыщыыыыыыыыыщяяящшхххххххпрррррхоххххххххххммхккхщыыыыыыыыыщыыышшхххххххххххх',
//     'хххххххххттттщщыяяяыыыыыыыыыыыщяяящшхххххххпрррррхоххххххххххммхккхщыыщыыыыщыыыыыышшххххххххххх',
//     'хххххххххттттттщяяяыыыыыыыыыыыщяяяхххххххххпрррррроххххххххххммхккхщыыыыыыщыыыыыыышшххххххххххх',
//     'ххххххттттттттттяяяыыыыыыыыытттяяяхххххххххппррррххххххххххххммтккхщыыыыыщыыыыыыыышшххххххххххх',
//     'ххххххттттттттттяяяттттыыытттттяяяхххххххххпппрроххххххттттттммткктщыыыыыыщщыыыыыышшххххххххххх',
//     'хххххххххттттяяяяяттттттттттттттяяяяяхххххххппппххтттттттттттммккктхщыыыыыыыыыыыыышхххххххххххх',
//     'хххххххххххххххххххххххххххттттттттттххххххххххххххххттттттмммтттттттттхххххххххххххххххххххххххххххххххххххххх',
//     'ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
//     'хххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
//     'хххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
//     'хххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
//     'ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
//   ]
//   )
// }

// if (now + b >= 2 * 500 && now + b <= 3 * 500) {
//   let diff = (3 * 500) - (now + b)


//   if (diff <= 50) {
//     b = -now
//   }

//   initArt([
//     'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddddddddddddddddddddddddddd',
//     'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddddddddddddddd',
//     'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddddddddddd',
//     'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddddddddddddd',
//     'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddd',
//     'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddd',
//     'cccccccccccccccccccccccccccssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddd',
//     'ccccccccccccccccccccccccccccccccccccsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdd',
//     'ccccccccccccccccccccccccccccccccccccccccccccsssssssssssssssssssssssssssssssssssssssssssssssssssssss',
//     'cccccccccccccccccccccccccccccccccccccccccccccccccssssssssssssssssssssssssssssssssssssssssssssssssss',
//     'llllllllllllllllllllllcccccccccccccccccccccccccccccccccsssssssssssssssssssssssssssssssssssssssssss',
//     'lllllllllllllllllllllllllllcccccccccccccccccccccccccccccccccssssssssssssssssssssssssssssssssssssss',
//     'llllllllllllllllmmllllllllllllllccccccccccccccccccccccccccccccccccssssssssssssssssssssssssssssssss',
//     'lllllllllllllllmmmmlllllllllllllllllllcccccccccccccccccccccccccccccccccccsssssssssssssssssssssssss',
//     'llllllllllllllmmmmmmlllllllllllllllllllllllcccccccccccccccccccccccccccccccccccssssssssssssssssssss',
//     'lllllllllllllmmmmmmmmlllllllllllllllllllllllllllcccccccccccccccccccccccccccccccccccccsssssssssssss',
//     'llllllllllllmmmmmmmmmmmlllllllllllllllllllllllllllllcccccccccccccccccccccccccccccccccccccsssssssss',
//     'lllllllllllmmmmmmmmmmmmmmlllllllllllllllllllllllllllnnccccccccccccccccccccccccccccccccccccsssss',
//     'llllllllmmmmmmmmmmmmmmmmmmmllllllllllllllllllllllllnnnnccccccccccccccccccccccccccccccccccccccc',
//     'llllllmmmmmmmmmmmmmmmmmmmmmmmlllllllllllllllllllllnnnnnnnccccccccccccccccccccccccccccccccccccc',
//     'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmlllllllllllllllllnnnnnnnnnnlllccccccccccccccccccccctccccccccccc',
//     'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmlllllllllllnnnnnnnnnnnnllllllccccccccccccccctttccccccccccc',
//     'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmllllllllnnnnnnnnnnnnnnllllllllccccccccccctttttcccccccccc',
//     'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmllnnnnnnnnnnnnnnnnnnllllllllllllllllltttttcccccccccc',
//     'mmmmmmmmmmfmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnllllllllllllnnlltttccccccccccc',
//     'mmmmmmmmmfffmmfmmmfmmmmmmmmmmmmkkkkkmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnllllllnnnnntttctctctctccc',
//     'mmmmmmmmffffffffmfffmmmmmmmmmmkkkkkkkmmmmmmmmnnnnnnkkknnnnnnnnnnnnnnnnnllnnnnnnnntttttttttttccc',
//     'fffffffffffffffffmffffmmmmmmmkkkkkkkkkkkkkmmmmnnnkkkkkkknnnnnnnnnnnnnnnnnnnnnnnnntttktttktttttc',
//     'ffffffffffffffffffffffmmmfkkkkkkkkkkkkkkkkkkmmnnkkkkkkkkkkknnnnnnnnnnnnnnnnnnnnnnttktkkkktktttt',
//     'ffffffffffffffffffffffmmffkkkkkkkkkkkkkkkkkkkmkkkkkkkkkkkkkkkkkknnnnnnnnnnnnnnnnntttktntntttttt',
//     'fffffffffffffffffffffffmfffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkknnnnnnnnnnnnnntkttttkttttttt',
//     'fffffffffffffffffffffffffffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkknnnnntkkttttttttttt',
//     'fffffffffffffffffffffffffffffkkkffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkknooooootttttttt',
//     'fffffffffffffffffffffffffffffffffffkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkooooooooootttttt',
//     'fffffffffffffffffffffffffffffffffffkkkffkjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkoooooooooooooooot',
//     'fffffffffffffffffffffffihhifffffffffffffjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkooooooooooooooooooo',
//     'ffffffffffffffffffffffiihhhiffffffffffffjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkoooooooooooooooooooo',
//     'fffffffffffffffffffffiigggggfffffffffffffjffjjjjjjjkkkkkkkkkkkkkkkkkkkkkooooooooooooooooooooooo',
//     'fffffffffffffffffffffiigyyyyffffffffffffffffjjjjjjjjkkkkkkkkkkkkvrrpkkkoooooooooooooooooooooooo',
//     'fffffffffffffffffffffiigqyyqfffffffffffffffffjjjjjjjjjjkkkkkkkkvuuuppkooooooooooooooooooooooooo',
//     'fffffffffffffffffffffiigyyyyfffffffffffffffffffjjjjjjjjjjkkkkkkvuzzuppooooooooooooooooooooooooo',
//     'ffffffffffffffffffiihfiihhhhfffffffffffffffffffjjjjjjjjjjjjjkkkvzzuuupooooooooooooooooooooooooo',
//     'ffffffffffffffffffffffiihiihffffffffffffffffffffjjjjjjjjjjjjkkkkzzuuuppoooooooooooooooooooooooo',
//     'fffffffffffffffffffffffiiiiiffffffffffffffffffffffjjjjjjjjjjjjkkzquuuppoooooooooooooooooooooooo',
//     'ffffffffffffffffffffffa12a15ffffffffffffffffffffffjjjjjjjjjjjjkkzzuuuppoooooooooooooooooooooooo',
//     'ffffffffffffffffffffffa1331affffffffffffffffffffffjjjjjjjjjjjjjjzzuuuppooooooooooooooooooooooooo',
//     'fffffffffffffffffffaaaa1221aaaafffffffffffffffffffjjjjjjjjjjjjkkzzzuzpooooooooooooooooooooooooo',
//     'ffffffffffffffffffa555334334555affffffffffffffffffjjjjjjjjjjjjkkzzzzuoooooooooooooooooooooooooo',
//     'ffffffffffffffffffa533333433355affffffffffffffffffjjjjjjjjjjjjjkkkgggoooooooooooooooooooooooooo',
//     '88888888888888888855334343334558888fffffffffffffffjjjjjjjjjjjjjjkk6679цoooooooooooooooooooooooo',
//     '8888888888888888885533333433355888888888888888888888888888888888886799йц88888888888888888888888',
//     '88888888888888888855334333333558888888888888888888888888888888w8886799йцц8888888888888888888888',
//     '8888888888888888885544333w333558888888888888888888888888888888w8886799ййц8888888888888888888888',
//     '8888888888888888885533333w33355888888888888888888888888888888www887999ййц8888888888888888888888',
//     '8888888888888888885533ккwww3555888-88888-8888888888-888-8888ккwкк8799йййц8888888888888888888888',
//     '8888888888888888885555ккккк3к5588-88-88888-88888888888888888ккеек8799йййц8888888888888888888888',
//     '8888888888888888885555ккккккк558888-888-88888-88-8--88-8-888ннн99999ййййц8888888888888888888888',
//     '888888888888888888щгггггwwwкк5гш88------888---88-----8-88888ннн9999йййййй8888888888888888888888',
//     '88888888888888888щггггггеееккгггш------------------------8-8н777777ффйййй8888888888888888888888',
//     '8888888888888888щфггггггеее33ггггш--------------------------н77ккккййффйй88888х8888888888888888',
//     '8888888888х8888щффггггыыыыыщщщггфш---------------------------ккккккййййфй8888хх888888888888х888',
//     '8888888888хх8х8щффффыыыыыыыыыщщгффш--------------------------ккккккйййййф888хххх8888х88888х888х',
//     '8888хх88хххх88хщяяяыыыыыыыыыыыщфффш----х---ппро-о-------х----99хккйййййййшшшхххххх8хх888х8х88хх',
//     '88888х8хххххх8щщяяяыыыыыщыыыыыщяяяш---х-----ппрр-о----х-ххх--99хььййййййыыыышшххххххх8888хххххх',
//     '8888хххххххххщщыяяяыыыщщыыыыыыщяяяшшххх----х-пр---охх-ххххххх99хььххщыыыыыыщыышхххххххх8ххххххх',
//     '888ххххххххххщщыяяяыыщыыщщыыыыщяяящшххх--ххх-пр--хохххххххххх99хккххщыыыыыщыыышхххххххххххххххх',
//     '8ххххххххххххщщыяяяыыыщыыыщыыыщяяящшххххх-ххппроххоххххххххххммхккххщыыыыщыыыыышшхххххххххххххх',
//     'ххххххххххххтщщыяяяыщыыыыыыыщыщяяящшхххххххппрррохоххххххххххммхккхщыыыыыщыщыыыышшххххххххххххх',
//     'хххххххххххттщщыяяяыщыыыыыыыыыщяяящшхххххххпрррррхоххххххххххммхккхщыыыыыыыыыщыыышшхххххххххххх',
//     'хххххххххттттщщыяяяыыыыыыыыыыыщяяящшхххххххпрррррхоххххххххххммхккхщыыщыыыыщыыыыыышшххххххххххх',
//     'хххххххххттттттщяяяыыыыыыыыыыыщяяяхххххххххпрррррроххххххххххммхккхщыыыыыыщыыыыыыышшххххххххххх',
//     'ххххххттттттттттяяяыыыыыыыыытттяяяхххххххххппррррххххххххххххммтккхщыыыыыщыыыыыыыышшххххххххххх',
//     'ххххххттттттттттяяяттттыыытттттяяяхххххххххпппрроххххххттттттммткктщыыыыыыщщыыыыыышшххххххххххх',
//     'хххххххххттттяяяяяттттттттттттттяяяяяхххххххппппххтттттттттттммккктхщыыыыыыыыыыыыышхххххххххххх',
//     'хххххххххххххххххххххххххххттттттттттххххххххххххххххттттттмммтттттттттхххххххххххххххххххххххх',
//     'ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
//     'ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
//     'ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
//     'ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
//     'ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх',
//   ]
//   )
// }

}