import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME}>
      <svg
       fill={s.logoPrimary}
      version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="60.000000pt" height="50.000000pt" viewBox="0 0 120.000000 120.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,120.000000) scale(0.015190,-0.015075)"
fill="#000000" stroke="none">
<path fill={s.hfxBull} d="M6785 6580 c-86 -22 -315 -153 -315 -180 0 -28 -256 -170 -306 -170
-7 0 -31 -16 -54 -35 -51 -43 -80 -51 -130 -36 -20 6 -70 11 -109 11 -63 0
-83 -5 -147 -36 -77 -37 -104 -67 -104 -118 0 -44 21 -73 71 -101 41 -22 49
-31 49 -56 0 -22 5 -29 19 -29 24 0 51 26 51 49 0 10 -23 36 -52 57 -42 32
-53 45 -53 68 0 43 50 66 142 66 76 0 95 -10 70 -38 -9 -9 -29 -43 -46 -76
-27 -51 -31 -68 -31 -141 0 -60 -7 -107 -26 -171 -15 -49 -32 -125 -38 -170
-7 -45 -19 -93 -29 -107 -21 -33 -22 -66 -1 -96 14 -19 23 -22 52 -18 59 10
90 55 60 85 -9 9 -6 18 15 40 21 21 27 38 27 71 0 78 67 172 158 219 l59 31
39 -24 c21 -14 54 -25 73 -25 28 0 32 -2 21 -15 -7 -9 -9 -26 -5 -45 l7 -30
-55 0 c-64 0 -67 -4 -67 -91 0 -56 -5 -65 -34 -60 -24 5 -50 -15 -67 -52 -37
-84 -22 -93 91 -54 l65 22 16 65 16 65 44 -2 c24 -1 58 -4 75 -8 39 -8 56 8
103 97 51 97 52 97 104 48 63 -57 93 -54 125 14 13 27 26 65 29 85 3 20 17 60
30 89 21 45 28 51 47 46 14 -3 45 5 83 24 l60 29 29 -24 c32 -26 32 -37 2
-100 -22 -49 -30 -51 -65 -23 -38 29 -70 25 -109 -14 -47 -47 -44 -63 12 -72
30 -4 58 -17 79 -35 51 -45 77 -39 126 29 38 51 96 112 107 112 2 0 11 -9 20
-20 24 -29 81 -29 137 1 25 13 45 30 45 37 0 8 8 27 17 43 16 27 16 31 0 58
-17 29 -17 30 8 55 14 14 25 36 25 49 0 14 8 34 18 46 17 22 18 22 64 4 46
-16 49 -16 95 3 26 11 47 26 46 32 -2 7 8 12 21 12 13 0 62 17 108 39 45 21
105 42 133 46 41 6 46 9 31 17 -12 7 -50 8 -105 3 -173 -15 -209 -12 -321 24
-150 48 -151 48 -186 122 -36 73 -117 155 -193 193 -64 32 -195 76 -223 75
-13 -1 -36 -5 -53 -9z"/>
<path fill={s.hfxTxt} d="M2188 6393 c-1 -5 -2 -35 -4 -68 -1 -33 -5 -91 -9 -128 -7 -63 -6
-70 15 -89 20 -19 22 -27 15 -72 -4 -28 -9 -73 -11 -99 -1 -27 -7 -60 -13 -75
-7 -18 -10 -179 -8 -487 l2 -460 258 -3 257 -2 0 118 c0 77 -4 122 -12 130 -8
8 -9 18 -1 35 6 12 11 94 12 182 1 192 0 191 92 179 l64 -9 3 -317 2 -318 217
0 c194 0 217 2 229 18 13 16 15 16 28 0 31 -41 36 -21 34 170 0 106 -5 192
-11 200 -6 8 -6 16 1 25 8 9 11 181 12 545 l0 532 -60 0 c-57 0 -60 -1 -50
-19 7 -14 7 -22 0 -26 -13 -8 -40 13 -40 30 0 10 -41 13 -180 14 l-180 1 0
-310 c0 -207 -3 -310 -10 -310 -14 0 -51 -86 -45 -103 3 -6 1 -19 -5 -27 -13
-21 -31 -1 -50 57 -19 59 -46 73 -37 19 7 -41 6 -41 -33 -21 -39 20 -60 53
-60 93 0 31 2 34 24 28 13 -3 31 -9 39 -12 22 -8 20 53 -2 66 -15 9 -15 11 0
23 21 16 14 119 -12 162 -16 24 -19 51 -19 143 l0 112 25 0 c23 0 25 4 25 40
l0 40 -250 0 c-137 0 -251 -3 -252 -7z m925 -30 c10 -18 18 -153 8 -153 -5 0
-12 8 -14 18 -3 12 -5 12 -5 2 -1 -8 10 -28 23 -45 18 -22 25 -25 25 -13 0 23
18 32 35 18 8 -6 19 -9 24 -6 5 4 12 2 16 -3 3 -5 -3 -14 -12 -20 -16 -9 -16
-10 -2 -11 10 0 30 -25 49 -62 28 -54 31 -64 19 -82 -7 -12 -12 -43 -11 -71 2
-31 -7 -82 -23 -134 -26 -86 -33 -175 -15 -186 14 -9 13 -78 -2 -93 -19 -19
-28 -14 -28 18 0 40 -22 39 -35 -2 -12 -41 1 -77 32 -84 27 -7 20 -32 -10 -30
-13 1 -23 9 -25 21 -2 11 -16 33 -30 48 -15 15 -27 33 -28 40 -3 47 -19 97
-30 97 -8 0 -14 4 -14 8 0 5 10 8 23 8 18 -1 23 5 25 31 2 23 9 33 28 37 31 8
31 31 -1 32 -16 1 -26 -5 -30 -17 -11 -32 -21 -21 -35 35 -13 56 -7 87 13 67
30 -30 38 19 11 71 -15 30 -15 31 18 59 18 15 39 26 46 24 6 -2 12 1 13 8 3
34 -4 74 -16 87 -7 8 -15 27 -19 42 -7 30 -37 44 -62 30 -16 -9 -15 -10 4 -16
17 -6 20 -12 15 -42 -4 -25 -2 -39 8 -45 12 -7 11 -11 -3 -26 -10 -9 -20 -14
-24 -11 -26 27 -33 263 -9 322 14 33 38 47 48 29z"/>
<path fill={s.hfxTxt} d="M3470 5904 c0 -427 2 -497 15 -510 8 -9 16 -29 17 -45 0 -16 1 -35 2
-41 1 -7 -7 -12 -16 -12 -16 2 -18 -11 -19 -135 -1 -75 -2 -161 -3 -191 l-1
-55 43 -3 c24 -2 49 2 56 8 8 5 20 8 29 4 12 -4 16 6 21 48 4 29 10 73 13 97
4 31 2 42 -6 37 -7 -5 -11 1 -11 15 0 18 2 19 15 9 12 -10 15 -10 15 3 0 20
-24 28 -39 14 -10 -9 -16 -7 -28 8 -15 20 -15 39 3 238 5 57 9 67 25 67 16 0
18 5 13 28 -3 15 -10 36 -14 47 -15 34 -40 97 -40 101 0 2 11 4 25 4 21 0 25
5 25 30 0 33 -14 39 -29 13 -9 -16 -12 -16 -20 -3 -11 16 3 40 25 40 26 0 46
32 41 66 -4 22 -1 37 9 45 8 7 13 18 10 25 -6 16 19 38 34 29 5 -3 10 -17 10
-30 0 -30 10 -55 21 -55 5 0 9 7 9 15 0 9 9 15 21 15 14 0 24 10 32 30 6 17
15 30 20 30 5 0 6 -8 2 -17 -4 -10 -8 -25 -8 -33 0 -8 -8 -21 -18 -30 -22 -19
-42 -91 -29 -104 6 -6 14 2 21 22 6 18 15 32 19 32 17 0 31 -213 16 -238 -5
-9 -16 4 -33 38 -28 56 -40 65 -78 56 -22 -6 -25 -12 -25 -55 0 -60 8 -69 35
-34 l22 27 18 -28 c17 -26 17 -29 2 -56 -9 -15 -17 -35 -17 -44 0 -21 -16 -21
-28 0 -8 14 -10 12 -14 -10 -4 -20 -1 -26 13 -26 22 0 25 -20 7 -38 -10 -10
-10 -15 0 -21 14 -8 56 -114 72 -182 12 -46 -1 -95 -23 -91 -18 3 -24 -23 -7
-33 19 -12 11 -45 -10 -45 -23 0 -26 -26 -6 -52 9 -12 27 -18 54 -18 41 0 41
0 48 46 5 34 10 44 23 42 11 -2 16 -15 17 -43 l0 -40 57 -3 57 -3 2 318 3 318
183 3 182 2 0 50 c0 43 -3 50 -20 50 -14 0 -20 7 -20 23 0 30 10 40 27 26 10
-9 13 -7 13 10 0 11 4 21 10 21 20 0 40 -60 40 -121 0 -97 8 -65 10 41 3 129
4 123 -25 116 -14 -4 -25 -2 -25 4 0 15 -173 13 -188 -2 -9 -9 -17 -9 -34 0
-13 6 -52 13 -88 14 l-65 3 -3 193 -2 192 214 0 215 0 3 73 c2 39 7 72 11 72
5 0 36 -62 70 -137 33 -76 64 -138 68 -138 4 0 11 9 14 20 4 11 11 18 16 15
12 -8 12 -55 -1 -55 -17 0 -11 -37 15 -96 15 -34 29 -54 34 -48 14 15 25 174
12 174 -6 0 -11 9 -11 20 0 11 5 20 10 20 6 0 10 -5 10 -12 0 -9 3 -9 11 -1
18 18 0 35 -31 28 -52 -11 -63 44 -35 177 9 40 13 83 10 96 l-5 22 -380 0
-380 0 -6 -27 c-5 -17 -3 -28 4 -31 12 -4 7 -48 -10 -94 -8 -22 -17 -28 -39
-28 -26 0 -29 3 -29 34 0 18 7 53 15 76 26 73 33 70 -150 70 l-165 0 0 -496z"/>
<path fill={s.hfxTxt} d="M4750 6378 c-5 -13 -9 -17 -9 -10 -1 20 -27 14 -28 -7 -1 -11 6 -21
18 -24 18 -5 19 -8 7 -27 -11 -18 -11 -22 5 -31 9 -6 17 -18 17 -28 0 -10 11
-49 25 -85 25 -67 32 -130 16 -155 -5 -7 -14 -10 -20 -7 -14 9 -14 -17 0 -31
15 -15 3 -47 -15 -40 -17 7 -30 -21 -17 -37 8 -10 15 -67 12 -103 -1 -15 -37
-17 -46 -3 -6 10 -45 14 -45 5 0 -3 12 -34 26 -71 20 -49 24 -68 15 -77 -13
-13 -15 -77 -2 -77 6 0 13 5 16 10 14 23 23 8 9 -17 -16 -33 -18 -59 -4 -68
17 -11 11 -28 -9 -22 -41 10 -66 -28 -35 -54 14 -11 18 -10 30 5 12 18 14 18
20 2 11 -28 -2 -108 -19 -118 -12 -6 -14 -15 -7 -39 10 -34 -7 -177 -22 -194
-6 -6 -14 -4 -23 8 -9 13 -12 36 -7 80 11 121 10 132 -18 135 -20 3 -22 2 -12
-11 9 -10 10 -17 2 -22 -5 -3 -14 5 -20 19 -5 14 -12 26 -15 26 -12 0 -55 -33
-55 -41 0 -5 -31 -85 -70 -177 -38 -92 -70 -170 -70 -174 0 -5 65 -8 145 -8
167 0 167 0 141 79 -19 60 -19 61 -2 61 9 0 15 -19 19 -59 3 -33 8 -64 12 -70
3 -7 44 -11 100 -11 l93 0 6 28 c3 15 15 81 26 147 40 239 50 265 64 173 3
-24 18 -112 33 -195 l26 -153 254 0 c173 0 253 3 253 11 0 6 -22 56 -48 112
-43 90 -69 149 -180 405 -21 48 -31 61 -44 58 -25 -6 -29 5 -39 91 -7 60 -5
81 7 104 8 16 19 53 24 82 6 30 18 58 29 67 18 14 91 175 91 201 0 6 6 17 14
23 17 13 156 323 148 331 -3 3 -41 5 -84 5 l-78 0 0 -30 c0 -53 -45 -53 -53 0
l-4 25 -143 0 -144 0 -36 -162 c-19 -89 -38 -165 -42 -168 -6 -6 -13 23 -48
195 -12 58 -24 113 -26 123 -5 14 -17 17 -80 17 -68 0 -75 -2 -84 -22z m149
-446 c6 -11 5 -37 -1 -71 -7 -40 -6 -60 3 -77 9 -18 9 -29 0 -53 -13 -29 -11
-175 2 -188 4 -3 4 -16 1 -28 -3 -13 -1 -26 5 -29 6 -4 11 -21 11 -37 0 -44
-22 -32 -35 19 -5 23 -16 47 -22 54 -9 8 -13 57 -13 170 0 204 19 296 49 240z"/>
<path fill={s.hfxBull} d="M327 5457 c-7 -20 62 -171 166 -357 273 -490 666 -912 1182 -1266
259 -178 275 -185 244 -104 -24 64 -24 107 1 148 27 43 25 61 -6 72 -65 25
-218 108 -309 168 -105 69 -249 204 -323 303 -23 31 -42 59 -42 62 0 20 35 0
92 -51 195 -177 439 -328 645 -398 50 -18 52 -18 73 1 20 18 145 180 170 222
19 30 5 44 -76 73 l-67 23 -19 -24 c-11 -13 -41 -59 -68 -101 -47 -73 -52 -78
-85 -78 -50 0 -152 50 -202 99 -40 39 -43 45 -43 97 0 40 8 71 27 110 16 33
23 58 17 63 -5 5 -49 23 -99 40 -207 73 -487 244 -765 470 -73 59 -159 131
-184 156 -155 148 -300 281 -311 283 -7 2 -15 -3 -18 -11z"/>
<path fill={s.hfxBull} d="M7380 5357 c-238 -233 -429 -391 -655 -542 -201 -134 -342 -208 -492
-261 -94 -33 -97 -38 -58 -114 57 -113 14 -196 -138 -265 -37 -17 -69 -25 -93
-23 -34 3 -41 9 -86 83 -77 125 -73 122 -153 94 -83 -29 -92 -44 -58 -95 55
-81 157 -204 175 -210 36 -11 233 75 380 167 94 59 260 184 333 251 94 86 102
55 12 -52 -152 -183 -357 -332 -584 -428 -29 -13 -53 -28 -53 -35 0 -7 9 -25
20 -42 26 -39 26 -107 0 -162 -17 -39 -17 -43 -3 -43 10 0 33 10 52 23 20 13
77 50 126 82 50 32 149 102 220 156 502 375 860 798 1120 1321 82 167 95 208
63 208 -7 0 -65 -51 -128 -113z"/>
<path fill={s.hfxTxt} d="M852 5404 c-24 -17 -29 -52 -9 -76 15 -19 180 -108 200 -108 8 0 34
-15 58 -34 48 -36 141 -86 161 -86 7 0 51 -25 98 -55 65 -42 87 -62 96 -87 10
-31 14 -33 60 -33 63 0 82 -12 86 -55 2 -26 8 -36 25 -40 13 -3 31 -19 40 -37
14 -24 41 -43 111 -78 51 -26 99 -57 108 -70 21 -33 8 -77 -55 -175 -61 -94
-65 -129 -22 -159 62 -45 82 -31 156 104 21 39 47 80 58 93 32 35 82 29 189
-22 51 -25 109 -49 128 -54 30 -7 36 -13 41 -43 3 -19 9 -40 13 -47 12 -19
-10 -66 -75 -162 -57 -83 -221 -281 -273 -329 -36 -34 -34 -70 8 -125 42 -54
104 -113 129 -122 42 -14 126 68 280 271 77 101 86 110 114 108 31 -3 31 -3
20 32 -9 31 -8 38 13 60 29 31 71 32 116 4 26 -16 35 -30 40 -60 5 -32 9 -37
21 -28 10 9 17 9 25 1 19 -19 -3 -66 -32 -70 -41 -6 -43 -18 -5 -46 l35 -27 0
-92 c0 -51 -5 -130 -10 -176 -13 -98 -6 -114 49 -109 l36 3 7 180 c3 99 11
209 16 245 19 131 64 275 117 380 34 67 33 73 -12 66 -32 -5 -50 0 -109 33
-103 58 -117 82 -55 96 21 4 44 -1 80 -19 66 -34 83 -33 120 9 27 31 31 43 31
95 l0 59 -83 49 c-107 63 -122 68 -153 47 -40 -26 -106 -3 -167 58 -28 29 -54
47 -65 45 -9 -2 -34 -28 -54 -58 -47 -68 -47 -100 -1 -113 34 -10 46 -27 37
-52 -9 -23 -32 -18 -88 18 -28 18 -75 39 -105 45 -33 8 -86 32 -132 62 -43 28
-80 50 -83 50 -2 0 -77 43 -165 95 -167 98 -239 135 -265 135 -18 0 -26 28
-41 140 -8 56 -32 105 -51 103 -20 -2 -23 -5 -87 -102 -23 -36 -47 -66 -52
-68 -6 -2 -35 13 -65 32 -30 20 -66 38 -80 42 -14 3 -61 29 -105 58 -44 29
-97 58 -117 64 -20 7 -47 20 -60 30 -43 33 -196 121 -210 121 -7 0 -24 -7 -36
-16z"/>
<path fill={s.hfxTxt} d="M6925 5401 c-6 -5 -26 -17 -45 -28 -19 -10 -62 -36 -95 -57 -33 -22
-81 -47 -106 -57 -46 -18 -133 -72 -144 -89 -3 -5 -24 -14 -46 -20 -22 -6 -65
-27 -94 -46 -30 -19 -58 -34 -62 -34 -10 0 -47 47 -96 123 -21 31 -42 57 -47
57 -16 0 -32 -41 -51 -133 -19 -91 -31 -117 -54 -117 -26 0 -277 -140 -512
-287 -77 -47 -112 -63 -139 -63 -26 0 -51 -10 -86 -36 -55 -39 -81 -41 -86 -6
-3 18 4 26 32 37 47 20 47 43 -1 118 -45 68 -71 75 -101 23 -21 -35 -91 -76
-132 -76 -13 0 -38 5 -55 11 -29 11 -39 8 -117 -35 -109 -59 -117 -68 -113
-131 3 -65 1 -59 31 -94 30 -37 50 -38 107 -10 68 35 93 40 111 20 15 -16 15
-19 -1 -38 -27 -30 -151 -96 -171 -90 -9 3 -25 8 -34 12 -27 11 -23 -16 12
-85 87 -173 119 -318 127 -585 4 -128 10 -203 17 -207 36 -24 105 7 90 41 -7
16 -26 252 -25 301 1 23 10 34 73 83 l23 18 -26 -5 c-37 -8 -69 18 -69 56 0
27 2 30 25 24 14 -4 24 -3 23 1 -7 26 14 70 40 86 70 40 139 7 128 -62 -6 -36
-5 -37 22 -33 25 3 34 -4 80 -71 69 -100 194 -248 234 -279 51 -38 67 -41 104
-17 39 24 114 111 132 153 16 35 10 45 -90 153 -92 99 -161 186 -228 288 -42
65 -51 86 -46 110 3 17 8 47 12 68 5 30 11 37 28 37 13 0 69 23 125 50 76 37
114 50 147 50 50 0 46 5 137 -160 35 -63 47 -76 70 -78 32 -4 71 18 87 48 12
23 -13 82 -74 175 -43 64 -50 89 -35 117 17 32 32 43 127 88 68 34 85 47 100
77 11 24 26 39 42 43 19 4 26 14 30 40 4 27 11 35 35 42 17 5 39 6 49 4 28 -7
52 9 64 43 9 26 36 48 144 114 15 9 34 17 41 17 19 0 103 46 149 83 21 16 53
33 70 38 18 5 71 30 118 57 68 39 86 54 88 74 2 14 -4 33 -13 42 -18 17 -65
22 -80 7z"/>
<path fill={s.hfxTxt} d="M3755 4709 c-133 -15 -289 -72 -390 -142 -191 -133 -310 -346 -369
-662 -21 -110 -33 -439 -17 -449 17 -11 45 17 66 65 10 22 23 38 29 36 21 -7
6 -100 -26 -164 -37 -75 -33 -102 23 -173 21 -27 39 -58 39 -69 0 -22 -97
-114 -111 -105 -21 13 -40 69 -46 139 -6 79 -17 91 -41 42 -24 -50 -25 -117
-3 -208 12 -48 21 -112 21 -142 0 -31 4 -59 10 -62 5 -3 23 1 39 10 50 25 82
19 152 -31 l64 -45 75 5 c41 3 100 9 131 12 52 5 56 4 67 -21 23 -50 12 -166
-24 -268 -19 -51 -17 -87 5 -117 18 -23 21 -23 38 -8 22 20 46 68 64 127 12
39 14 42 23 22 9 -21 -3 -103 -26 -166 -22 -63 -21 -89 5 -113 42 -40 68 -27
92 45 24 73 32 84 49 61 9 -13 10 -30 4 -65 -21 -113 -22 -108 7 -121 36 -17
56 -15 84 8 16 14 22 27 18 42 -8 29 14 122 25 106 10 -17 10 -83 -1 -132 -18
-75 31 -114 124 -100 63 9 80 34 65 100 -12 51 -5 158 10 149 4 -2 11 -39 15
-80 5 -61 11 -78 28 -90 29 -20 50 -19 78 4 l23 19 -17 71 c-15 66 -15 101 3
101 12 0 37 -34 44 -60 19 -67 28 -80 57 -80 22 0 32 7 45 31 17 33 16 37 -10
132 -9 32 -16 79 -16 105 1 44 2 46 16 27 8 -11 17 -36 20 -57 4 -21 13 -43
20 -49 8 -6 14 -17 14 -24 0 -21 32 -27 51 -9 25 22 24 72 -1 148 -14 42 -20
86 -20 152 0 89 1 94 26 110 24 16 29 16 78 1 29 -10 80 -17 113 -17 55 0 66
4 126 45 71 48 97 53 153 30 20 -8 40 -12 45 -9 5 3 9 39 9 79 0 44 8 105 20
149 22 79 18 131 -16 204 -22 47 -34 31 -34 -47 0 -106 -34 -166 -79 -141 -18
9 -91 86 -91 95 0 2 20 27 44 54 24 27 49 65 56 85 10 32 9 40 -15 80 -28 48
-59 161 -49 177 7 12 34 -8 34 -25 1 -16 66 -87 73 -79 4 3 7 75 7 160 0 501
-176 863 -495 1018 -50 24 -110 49 -135 55 -143 37 -326 47 -495 29z m204
-407 c32 -47 49 -62 77 -62 12 0 32 -9 45 -19 l24 -19 -33 -40 c-28 -36 -32
-48 -32 -101 0 -38 -4 -61 -11 -61 -6 0 -33 8 -60 17 -45 16 -50 16 -84 0 -20
-9 -45 -17 -56 -17 -19 0 -20 4 -13 59 6 57 5 59 -30 98 -20 22 -36 45 -36 51
0 6 25 19 55 28 39 11 61 24 72 42 22 35 45 62 52 62 3 0 17 -17 30 -38z m495
-926 c17 -29 25 -57 24 -78 -3 -33 -3 -33 47 -36 28 -2 67 2 88 8 22 6 41 9
44 6 3 -2 -11 -38 -30 -78 -19 -40 -42 -92 -52 -115 -12 -29 -25 -43 -44 -48
-14 -4 -41 -18 -60 -32 -33 -26 -36 -26 -228 -28 -148 -1 -197 -5 -203 -15
-24 -38 -70 37 -70 115 0 50 20 135 32 135 4 0 8 -28 10 -62 l3 -63 66 1 c55
2 81 9 150 42 46 21 103 53 127 71 l42 31 0 88 c0 118 11 130 54 58z m-1144
-113 c104 -6 109 -7 170 -53 83 -62 209 -119 279 -127 79 -8 91 2 91 76 1 66
13 54 28 -27 12 -65 0 -134 -28 -162 -24 -24 -30 -25 -30 -6 0 18 -20 25 -45
15 -29 -11 -142 -10 -195 2 -31 7 -58 7 -91 -1 -41 -10 -51 -9 -79 7 -17 10
-52 29 -78 44 -37 20 -50 34 -62 70 -23 63 -51 121 -68 141 -17 20 -6 42 17
32 9 -3 50 -8 91 -11z m655 -327 c30 -40 81 -231 71 -270 -5 -22 -13 -25 -68
-31 -35 -3 -81 -2 -103 2 -40 9 -40 9 -43 59 -3 46 18 145 46 215 10 25 47 59
64 59 4 0 19 -15 33 -34z"/>
<path fill={s.hfxBull} d="M852 4092 c-10 -7 -10 -16 2 -49 75 -213 311 -521 555 -727 238 -200
637 -415 931 -501 30 -9 69 -20 85 -25 44 -13 223 -40 280 -43 57 -2 53 -16
38 126 -10 87 -17 97 -77 97 -88 0 -338 57 -512 115 -126 43 -320 131 -356
163 -28 24 -11 31 39 15 27 -8 86 -25 133 -38 47 -12 148 -41 225 -63 252 -72
465 -119 485 -107 6 3 10 16 10 27 0 12 5 48 12 80 10 50 10 61 -2 68 -8 5
-68 18 -134 30 -453 78 -778 197 -1093 398 -57 37 -119 76 -137 87 -29 18
-248 183 -406 305 -35 27 -64 50 -65 50 0 0 -6 -4 -13 -8z"/>
<path fill={s.hfxBull} d="M6969 4093 c-4 -7 -105 -90 -170 -139 -14 -10 -77 -58 -140 -105
-292 -219 -564 -367 -849 -463 -189 -63 -287 -87 -495 -121 -55 -9 -115 -21
-134 -27 l-33 -10 7 -82 c3 -44 10 -85 15 -90 19 -19 395 73 830 204 112 33
81 -4 -64 -77 -202 -101 -595 -213 -754 -213 -59 0 -64 -8 -73 -116 -5 -53 -6
-101 -3 -106 10 -15 256 24 389 62 121 34 293 104 440 178 423 211 762 514
968 863 91 154 120 239 86 247 -10 2 -19 -1 -20 -5z"/>
<path fill={s.hfxBull} d="M2519 3743 c-39 -49 -106 -120 -147 -159 -67 -63 -75 -73 -63 -88 7
-9 18 -16 23 -16 6 0 36 -11 67 -24 31 -14 88 -37 126 -51 39 -15 90 -36 115
-47 92 -42 164 -16 85 30 -19 12 -43 37 -52 57 -15 31 -15 43 -4 97 16 80 25
190 18 220 -5 20 -69 68 -90 68 -3 0 -38 -39 -78 -87z"/>
<path fill={s.hfxBull} d="M5211 3807 l-43 -22 6 -115 c3 -63 8 -138 11 -166 6 -45 4 -54 -20
-82 -14 -17 -35 -34 -45 -37 -13 -4 -20 -15 -20 -31 0 -41 23 -34 290 76 36
15 86 35 113 44 26 10 47 24 47 32 0 7 -37 49 -82 93 -46 44 -108 111 -138
150 -30 38 -60 72 -66 74 -6 3 -30 -4 -53 -16z"/>
<path fill={s.hfxBull} d="M6670 3082 c-8 -4 -34 -19 -57 -34 -24 -16 -45 -28 -48 -28 -3 0 -24
-12 -46 -26 -186 -117 -650 -309 -844 -348 -16 -3 -52 -11 -80 -16 -150 -32
-247 -42 -485 -47 l-255 -5 -51 -33 c-53 -34 -113 -58 -177 -70 -20 -4 -39
-11 -42 -15 -3 -5 3 -43 13 -87 l19 -78 41 -3 c23 -2 90 9 149 23 143 34 174
41 268 59 200 39 304 56 385 63 48 4 53 3 40 -10 -8 -7 -49 -24 -90 -37 -41
-12 -93 -28 -115 -36 -141 -47 -459 -119 -634 -145 -83 -12 -83 -12 -145 -73
-36 -36 -97 -81 -146 -108 -47 -26 -100 -61 -118 -78 -39 -38 -72 -100 -72
-137 0 -31 34 -93 51 -93 6 0 39 29 73 65 69 70 144 111 251 134 147 33 299
78 330 98 11 7 25 13 32 13 11 0 56 18 173 72 44 20 110 46 240 93 36 13 96
31 135 40 382 93 730 299 1056 625 146 145 197 209 182 224 -8 7 -13 7 -33 -2z"/>
<path fill={s.hfxBull} d="M1150 3065 c0 -9 46 -66 102 -127 239 -260 529 -471 817 -594 118
-51 188 -75 306 -105 83 -21 139 -38 190 -59 17 -7 39 -16 50 -20 11 -4 101
-41 200 -83 182 -76 342 -130 431 -147 137 -25 219 -64 305 -147 72 -69 90
-73 108 -21 35 98 -28 189 -189 273 -38 21 -95 64 -131 99 -63 62 -65 63 -144
75 -73 11 -123 20 -285 52 -30 6 -77 17 -105 24 -27 8 -86 23 -130 35 -44 11
-96 27 -115 34 -19 8 -74 26 -122 40 -48 15 -90 31 -93 36 -8 13 59 13 122 0
26 -5 91 -16 143 -25 144 -25 283 -53 400 -82 58 -15 134 -27 170 -27 l65 -1
8 60 c16 116 20 107 -57 127 -38 10 -99 35 -135 57 l-66 39 -250 5 c-264 6
-380 19 -563 62 -106 26 -239 66 -297 90 -16 7 -50 20 -75 30 -115 42 -375
169 -532 259 -100 58 -128 67 -128 41z"/>
<path fill={s.hfxTxt} d="M1569 1523 c-1 -16 -2 -49 -3 -75 -1 -29 -8 -54 -19 -66 -14 -15 -17
-29 -11 -56 6 -35 7 -36 25 -20 12 11 19 31 19 56 0 21 4 38 10 38 16 0 24
-69 11 -97 -8 -18 -9 -29 -1 -37 12 -12 14 -63 3 -69 -5 -3 -8 -49 -8 -104 l0
-98 95 -2 c163 -2 160 -2 160 -18 0 -8 4 -15 9 -15 14 0 18 -80 4 -88 -7 -4
-13 -34 -15 -72 l-3 -65 -42 -3 -43 -3 0 85 0 86 -84 0 -85 0 2 -69 c2 -66 -5
-92 -20 -77 -4 4 -2 20 4 36 14 37 1 48 -17 15 -7 -14 -19 -25 -27 -25 -9 0
-13 -14 -13 -42 0 -24 -7 -56 -15 -72 -8 -15 -15 -36 -15 -46 0 -37 21 -41
231 -38 l204 3 3 25 c6 43 20 44 36 5 l16 -38 76 6 c119 9 114 -5 114 283 0
242 0 244 -22 258 -13 8 -38 16 -57 18 -30 3 -36 -1 -41 -22 l-7 -25 -11 27
c-9 22 -16 26 -39 23 -15 -2 -31 -4 -36 -4 -4 -1 -13 -13 -19 -28 l-11 -28 -6
30 c-7 32 -2 31 -134 34 l-28 1 3 123 3 122 40 0 40 0 3 -82 c2 -63 6 -83 17
-83 7 0 15 10 17 23 3 25 23 25 23 -1 0 -11 9 -18 26 -20 25 -3 26 -1 26 50 0
29 3 96 6 149 l7 95 -33 12 c-21 8 -96 12 -200 12 l-167 0 -1 -27z"/>
<path fill={s.hfxTxt} d="M2041 1532 c-6 -11 -11 -50 -11 -87 0 -51 -5 -72 -21 -94 -12 -16
-24 -50 -26 -75 l-6 -47 94 3 94 3 3 136 c3 154 -2 166 -76 176 -33 4 -42 2
-51 -15z"/>
<path fill={s.hfxTxt} d="M2215 1538 c-3 -7 -4 -224 -3 -483 l3 -470 97 -3 97 -3 15 28 c15 27
17 26 20 -7 1 -11 13 -15 41 -15 l40 0 3 114 c2 69 -1 118 -8 126 -6 7 -8 20
-4 29 4 10 0 18 -10 22 -20 8 -21 24 -1 24 8 0 14 5 13 11 -2 6 3 14 10 16 6
3 12 -3 12 -12 0 -14 3 -15 14 -6 11 9 12 7 9 -12 -4 -20 95 -273 120 -304 7
-9 43 -12 131 -10 l121 2 3 154 c2 152 -5 197 -28 161 -13 -20 -13 -110 0
-110 6 0 10 -11 10 -24 0 -14 -4 -28 -10 -31 -5 -3 -10 3 -10 14 0 27 -16 27
-32 1 -18 -28 -24 -25 -33 13 -10 38 -7 88 6 103 4 5 6 27 2 47 -4 24 -2 37 6
37 6 0 11 -8 11 -17 1 -16 2 -16 16 2 8 11 20 20 25 20 25 0 39 41 39 116 0
70 -2 79 -24 97 -31 24 -30 55 2 89 20 22 23 33 18 67 -3 23 -6 48 -5 56 0 8
1 49 2 90 l2 75 -155 0 -155 0 -5 -230 -5 -230 -62 140 c-33 77 -79 181 -100
230 l-39 90 -97 3 c-72 2 -99 -1 -102 -10z"/>
<path fill={s.hfxTxt} d="M2987 1544 c-4 -4 -7 -38 -7 -76 l0 -68 35 0 35 0 0 -334 0 -335 -32
-3 -33 -3 0 -70 0 -70 114 0 115 0 7 30 c4 17 10 42 13 58 4 15 13 27 21 27
16 0 21 -16 6 -22 -5 -2 -11 -23 -12 -48 -4 -44 -3 -45 26 -45 l30 0 -3 78
c-2 48 1 84 8 92 8 10 8 24 1 52 -13 45 0 63 22 30 10 -15 18 -60 23 -123 8
-118 15 -136 52 -132 26 3 27 5 30 75 l3 72 -33 3 -33 3 0 330 0 330 33 3 33
3 -3 72 -3 72 -221 3 c-121 1 -223 -1 -227 -4z"/>
<path fill={s.hfxTxt} d="M3497 1543 c-10 -9 -7 -583 3 -613 l8 -25 1 28 c2 44 21 21 21 -24 0
-24 4 -38 10 -34 6 3 10 16 10 29 0 12 4 26 9 32 5 5 11 18 14 29 3 11 5 -5 6
-36 0 -30 5 -59 10 -65 9 -10 -2 -118 -18 -169 -8 -26 -9 -21 -10 34 -1 69
-10 72 -31 8 -9 -30 -9 -49 1 -90 6 -29 17 -55 23 -59 6 -4 37 -8 68 -8 44 0
59 4 67 18 9 16 11 16 24 -2 18 -25 36 -14 29 19 -2 14 1 32 8 39 6 9 11 41 9
78 -2 83 11 170 25 165 7 -3 10 -36 7 -100 -2 -67 0 -97 8 -97 8 0 11 45 11
144 0 137 1 145 20 151 15 5 19 12 15 25 -3 10 -1 21 5 25 5 3 10 20 10 37 0
26 -2 29 -15 18 -9 -7 -19 -10 -22 -6 -4 4 -8 73 -8 154 l0 147 40 0 40 0 -2
-125 c-1 -69 -5 -154 -8 -191 -6 -63 -6 -65 20 -77 32 -15 177 -16 245 -1 30
6 54 18 60 29 6 11 10 116 10 249 l0 231 -26 17 c-34 22 -187 28 -207 8 -11
-10 -17 -10 -32 1 -15 11 -67 14 -235 14 -119 0 -220 -3 -223 -7z"/>
<path fill={s.hfxTxt} d="M4275 1537 c-3 -6 -4 -223 -3 -482 l3 -470 120 -3 c141 -2 150 0 135
28 -9 16 -7 31 6 66 14 38 15 50 4 83 -23 70 2 102 32 41 l17 -35 1 112 c0 61
4 115 10 118 5 3 12 28 16 56 8 60 18 69 33 27 14 -38 14 -58 1 -38 -8 12 -10
9 -10 -12 0 -16 6 -28 13 -29 71 -5 176 -7 190 -3 14 4 17 17 17 68 0 44 -5
67 -15 76 -10 8 -52 11 -145 8 -72 -2 -134 0 -137 5 -3 4 2 16 11 26 18 20 22
116 6 126 -6 4 -8 16 -5 26 4 11 2 26 -4 33 -25 29 14 39 149 37 123 -2 143 2
121 24 -6 6 -11 35 -13 65 l-3 55 -273 2 c-210 2 -274 0 -277 -10z"/>
<path fill={s.hfxTxt} d="M4917 1543 c-4 -3 -7 -222 -7 -485 l0 -478 125 0 c121 0 126 1 135
22 13 32 35 58 49 58 14 0 15 186 1 195 -17 11 -11 98 9 124 15 20 24 23 55
17 l36 -7 0 -205 0 -205 158 3 157 3 3 29 c2 16 -1 33 -7 39 -12 12 -15 47 -3
47 5 0 8 194 3 234 0 5 -10 1 -21 -9 -19 -18 -20 -17 -20 3 0 15 -12 25 -45
38 -25 9 -45 21 -45 25 0 5 30 27 66 50 50 32 64 46 61 60 -3 11 -1 19 4 19
14 0 10 38 -7 65 -12 18 -14 37 -8 84 3 33 10 58 15 55 5 -3 9 14 9 36 0 34
-4 43 -21 47 -18 5 -20 11 -16 39 3 19 1 36 -4 39 -5 4 -9 17 -9 30 0 28 -16
34 -80 32 l-45 -2 -3 -50 c-2 -27 2 -69 9 -93 6 -23 9 -45 6 -49 -10 -10 -37
18 -37 38 0 10 -5 21 -11 25 -7 4 -9 0 -5 -14 4 -11 3 -23 -3 -26 -5 -3 -6
-21 -1 -41 12 -53 -7 -125 -34 -125 -9 0 -13 24 -14 83 -1 45 -3 120 -5 167
l-2 85 -130 3 c-124 2 -131 1 -147 -20 -10 -14 -15 -33 -11 -49 4 -21 1 -28
-13 -31 -21 -4 -26 -52 -7 -88 15 -29 17 -84 4 -108 -6 -11 -4 -31 4 -55 8
-24 10 -48 5 -65 -5 -15 -14 -46 -20 -69 -6 -24 -17 -43 -24 -43 -7 0 -20 26
-29 60 -14 47 -15 64 -5 85 9 19 9 28 0 37 -27 27 -2 169 25 148 4 -3 8 15 9
40 1 25 3 47 4 50 1 3 2 8 1 12 0 4 6 25 13 47 13 35 13 40 -1 45 -20 8 -118
8 -126 -1z m401 -269 l3 -122 -25 -6 c-14 -3 -28 -15 -31 -26 -7 -22 -20 -26
-24 -7 -2 6 -5 74 -8 150 l-4 138 43 -3 43 -3 3 -121z m-292 -309 c-5 -18 -1
-27 14 -35 21 -11 29 -70 10 -70 -5 0 -10 -9 -10 -19 0 -11 -4 -22 -9 -26 -6
-3 -4 -20 5 -42 11 -26 12 -39 4 -47 -8 -8 -14 -7 -21 4 -8 11 -9 1 -5 -37 5
-56 -3 -70 -31 -54 -11 6 -13 11 -5 11 22 0 24 29 4 55 -15 19 -19 36 -16 68
5 56 21 148 28 170 3 9 8 24 11 32 8 26 28 17 21 -10z"/>
<path fill={s.hfxTxt} d="M5807 1543 c-2 -5 -5 -35 -6 -68 -1 -33 -9 -70 -17 -83 -15 -23 -16
-89 -2 -98 4 -3 8 2 8 10 0 9 5 16 10 16 6 0 10 18 10 40 0 40 13 53 24 24 9
-25 7 -63 -5 -87 -9 -16 -9 -22 0 -25 11 -4 16 -74 6 -84 -3 -3 -7 -46 -10
-96 -3 -65 -1 -91 8 -95 7 -2 62 -4 122 -5 142 -1 135 0 135 -17 0 -8 5 -15
10 -15 6 0 10 -23 10 -51 0 -29 -4 -48 -10 -44 -5 3 -10 -22 -12 -62 l-3 -68
-45 0 -45 0 -3 83 -3 82 -85 0 -84 0 5 -62 c3 -35 1 -70 -5 -78 -7 -11 -10 -5
-10 25 -1 38 -1 39 -16 20 -8 -11 -22 -19 -30 -17 -11 2 -14 -9 -14 -45 0 -26
-7 -61 -15 -77 -8 -15 -15 -36 -15 -46 0 -37 21 -41 231 -38 l203 3 8 33 c5
17 13 32 18 32 5 0 13 -15 18 -32 l9 -33 74 1 c127 1 119 -17 119 274 0 248 0
250 -22 264 -13 8 -38 17 -56 21 -28 6 -33 3 -41 -17 l-8 -23 -7 23 c-6 18
-15 22 -47 22 -21 0 -39 -4 -39 -9 0 -5 -5 -22 -12 -38 l-11 -28 -6 35 -6 35
-75 5 -75 5 0 120 0 120 45 0 45 0 3 -83 c2 -60 6 -82 15 -79 7 2 13 13 15 25
5 30 22 28 22 -3 0 -20 5 -25 25 -25 23 0 25 4 26 48 1 26 3 93 5 150 2 59 0
101 -5 98 -5 -3 -14 1 -21 9 -10 12 -44 15 -186 15 -95 0 -175 -3 -177 -7z"/>
<path fill={s.hfxTxt} d="M6270 1526 c-5 -15 -10 -55 -10 -88 0 -43 -5 -67 -17 -80 -9 -10 -18
-42 -21 -73 l-4 -55 91 0 91 0 0 143 c0 160 0 160 -79 173 -37 6 -41 4 -51
-20z"/>
<path fill={s.hfxTxt} d="M4647 722 c-3 -4 -3 -37 0 -75 l6 -67 91 0 c58 0 96 4 104 12 12 12
16 95 6 122 -5 13 -24 16 -104 16 -55 0 -101 -3 -103 -8z"/>
<path fill={s.hfxTxt} d="M2375 394 c-46 -98 -51 -114 -37 -114 14 0 27 15 39 43 11 24 18 27
63 27 48 0 51 -2 67 -35 16 -33 32 -43 46 -29 3 4 -16 51 -44 105 -65 131 -74
131 -134 3z"/>
<path fill={s.hfxTxt} d="M2599 449 c-3 -153 -1 -169 15 -169 10 0 16 13 18 42 2 23 9 43 16
46 7 2 33 -17 58 -42 44 -46 84 -64 65 -28 -5 9 -19 27 -30 39 -26 28 -26 35
-1 51 11 7 20 23 20 36 0 38 -34 59 -100 64 l-60 4 -1 -43z"/>
<path fill={s.hfxTxt} d="M2827 483 c-4 -3 -7 -51 -7 -105 0 -80 3 -98 15 -98 12 0 15 15 15
75 0 41 3 75 7 75 4 0 42 -34 84 -76 102 -101 111 -98 107 33 -2 79 -6 98 -18
98 -11 0 -16 -17 -20 -73 l-5 -72 -82 75 c-85 79 -86 79 -96 68z"/>
<path fill={s.hfxTxt} d="M3218 478 c-8 -22 -9 -126 -2 -163 6 -34 7 -35 55 -35 27 0 65 7 84
14 29 12 35 20 35 45 0 18 -7 34 -17 40 -14 7 -15 12 -4 24 19 23 9 60 -19 74
-33 17 -126 17 -132 1z"/>
<path fill={s.hfxTxt} d="M3447 483 c-4 -3 -7 -51 -7 -105 l0 -98 86 0 c64 0 85 3 81 13 -2 7
-19 11 -44 9 -23 -1 -53 2 -68 8 -21 8 -26 15 -23 38 3 25 7 27 56 30 28 2 52
7 52 12 0 5 -24 10 -52 12 -49 3 -53 5 -56 31 -3 27 -3 27 57 27 48 0 61 3 61
15 0 12 -14 15 -68 15 -38 0 -72 -3 -75 -7z"/>
<path fill={s.hfxTxt} d="M3904 474 c-33 -16 -64 -61 -64 -94 0 -33 26 -75 55 -88 59 -27 157
-6 189 39 18 26 21 81 6 110 -25 46 -124 64 -186 33z m138 -31 c25 -23 25 -94
-2 -118 -31 -28 -100 -31 -132 -5 -52 40 -29 126 37 143 30 8 77 -1 97 -20z"/>
<path fill={s.hfxTxt} d="M4157 483 c-4 -3 -7 -51 -7 -105 0 -90 2 -98 19 -98 16 0 20 8 23 42
2 23 9 43 16 46 7 2 32 -17 56 -42 58 -64 95 -62 41 2 -30 36 -30 37 -5 62 29
29 25 57 -12 80 -32 19 -117 28 -131 13z"/>
<path fill={s.hfxTxt} d="M4374 477 c-2 -7 -4 -54 -2 -103 l3 -89 83 -3 c52 -2 82 1 82 8 0 5
-23 10 -52 10 -66 0 -81 9 -76 46 3 27 6 29 56 32 66 4 59 22 -9 22 -48 0 -49
1 -49 30 0 28 1 29 55 32 81 4 73 22 -13 26 -54 2 -74 -1 -78 -11z"/>
<path fill={s.hfxTxt} d="M4800 384 c0 -80 3 -105 13 -102 8 3 13 30 15 76 2 40 6 72 10 72 4
0 41 -34 82 -75 41 -41 83 -75 93 -75 16 0 17 9 15 103 -2 83 -6 102 -18 102
-12 0 -16 -16 -18 -72 -2 -40 -6 -73 -10 -73 -4 0 -41 34 -82 75 -41 41 -80
75 -87 75 -10 0 -13 -27 -13 -106z"/>
<path fill={s.hfxTxt} d="M5327 483 c-4 -3 -7 -51 -7 -105 l0 -98 86 0 c60 0 85 3 82 11 -2 7
-29 12 -63 13 l-60 1 0 35 0 35 53 3 c69 4 67 22 -3 22 -54 0 -55 0 -55 30 0
28 1 29 57 32 34 2 58 8 61 16 3 9 -16 12 -70 12 -41 0 -78 -3 -81 -7z"/>
</g>
      </svg>
      </Link>
    </div>
  );
};

export default Logo;