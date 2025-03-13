let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Hydrostatic Forces on surface</h4>

        <div class="fs-16px">
        <p style="text-align: center">Hydrostatic force on trapezoidal plate</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    calculation();
    let btn_text = get_collapse_btn_text("Activity 1", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-weight: 400; font-size: 18px;">A trapezoidal plate has the following dimensions.</p>
        <div class="row">
            <div class="col-2">
                <p style="text-align: center; font-weight: 400; font-size: 18px;">a = ${a} m</p>
            </div>
            <div class="col-2">
                <p style="text-align: center; font-weight: 400; font-size: 18px;">b = ${b} m</p>
            </div>
            <div class="col-2">
                <p style="text-align: center; font-weight: 400; font-size: 18px;">h = ${h} m</p>
            </div>
        </div>
        <p style="font-weight: 400; font-size: 18px;">The smaller edge of trapezoidal plate is aligned with the free surface of the water. Find the position of centre of pressure.</p>
        <p style="text-align:center"><img src="images/sim1.png" style='width: 30%;' ></p>
        <br>
        
        <div class="row">
            <p style="font-weight: 500; font-size: 18px;">i) Calculate the position of centre of gravity</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;">
                    $$ \\bar{h} = (\\frac{2a+b}{a+b}) * \\frac{h}{3} \\quad m $$
                </p>
            </div>
            <div class="col-6"></div>
        
            <div class="col-2"></div>
            <div class="col-4">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\quad \\bar{h} = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='hbar-inp'><span id='hbar-val-sp'></span> m
                <button class='btn btn-info' style='position: relative; left: 4vw; color:#fff;' onclick='verify_hbar();' id='temp-btn-hbar' >Verify</button>
                 </p>
            </div>
            <div class="col-1"></div>
        </div>

        <div class="row" id="a-div" style="display: none">
            <p style="font-weight: 500; font-size: 18px;">ii) Calculate the area</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;">
                    $$ A = (\\frac{a+b}{2}) * h \\quad m $$
                </p>
            </div>
            <div class="col-6"></div>
        
            <div class="col-2"></div>
            <div class="col-4">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\quad\\quad A = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='a-inp'><span id='a-val-sp'></span> m
                <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_area();' id='temp-btn-a' >Verify</button>
                 </p>
            </div>
            <div class="col-1"></div>
        </div>

        <div class="row" id="f-div" style="display: none">
            <p style="font-weight: 500; font-size: 18px;">iii) Calculate total pressure force</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;">
                    $$ F = \\rho * g * A * \\bar{h} \\quad N/m^2 $$
                </p>
            </div>
            <div class="col-6"></div>
        
            <div class="col-2"></div>
            <div class="col-4">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\quad F = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='f-inp'><span id='f-val-sp'></span> N/m<sup>2</sup>
                <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_force();' id='temp-btn-f' >Verify</button>
                 </p>
            </div>
            <div class="col-1"></div>
        </div>

        <div class="row" id="ig-div" style="display: none">
            <p style="font-weight: 500; font-size: 18px;">iv) Calculate moment of inertia about centre of gravity</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;">
                    $$ I_G = [\\frac{a^2+4ab+b^2}{36(a+b)}] * h^3 \\quad m^4 $$
                </p>
            </div>
            <div class="col-6"></div>
        
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$\\quad\\quad I_G = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='ig-inp'><span id='ig-val-sp'></span> m<sup>4</sup>
                <button class='btn btn-info' style='position: relative; left: 6vw; color:#fff;' onclick='verify_ig();' id='temp-btn-ig' >Verify</button>
                 </p>
            </div>
            <div class="col-1"></div>
        </div>

        <div class="row" id="hstar-div" style="display: none">
            <p style="font-weight: 500; font-size: 18px;">v) Calculate position of centre of pressure</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;">
                    $$h^* = \\frac{I_G}{A\\bar{h}} + \\bar{h} \\quad m $$
                </p>
            </div>
            <div class="col-6"></div>
        
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\quad\\quad\\quad\\quad\\quad h^* = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='hstar-inp'><span id='hstar-val-sp'></span> m
                <button class='btn btn-info' style='position: relative; left: 2vw; color:#fff;' onclick='verify_hstar();' id='temp-btn-hstar' >Verify</button>
                 </p>
            </div>
            <div class="col-1"></div>
        </div>

    </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculation() {
    let A = (Math.random() * 2) + 2;
    a = parseFloat(A.toFixed(1));
    console.log("a= ", a);
    let B = (Math.random() * 2) + 6;
    b = parseFloat(B.toFixed(1));
    console.log("b= ", b);
    let H = (Math.random() * 2) + 2;
    h = parseFloat(H.toFixed(1));
    console.log("h= ", h);
    h_bar = ((2 * a) + b) / (a + b) * (h / 3);
    console.log("h bar= ", h_bar);
    area = ((a + b) / 2) * h;
    console.log("area= ", area);
    f = rho * g * area * h_bar;
    console.log("f= ", f);
    ig = ((Math.pow(a, 2) + 4 * a * b + Math.pow(b, 2)) / (36 * (a + b))) * Math.pow(h, 3);
    console.log("ig= ", ig);
    h_star = (ig / (area * h_bar)) + h_bar;
    console.log("h star= ", h_star);
}
function verify_hbar() {
    let btn = document.getElementById('temp-btn-hbar');
    let hbar_inp = document.getElementById('hbar-inp');
    let sp1 = document.getElementById('hbar-val-sp');
    if (!verify_values(parseFloat(parseFloat(hbar_inp.value).toFixed(2)), parseFloat(h_bar.toFixed(2)))) {
        alert(`incorrect value of pressure`);
        return;
    }
    hbar_inp.remove();
    sp1.innerText = `${parseFloat(h_bar.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('a-div'));
    div.style.display = 'block';
}
function verify_area() {
    let btn = document.getElementById('temp-btn-a');
    let a_inp = document.getElementById('a-inp');
    let sp2 = document.getElementById('a-val-sp');
    if (!verify_values(parseFloat(parseFloat(a_inp.value).toFixed(2)), parseFloat(area.toFixed(2)))) {
        alert(`incorrect value of pressure`);
        return;
    }
    a_inp.remove();
    sp2.innerText = `${parseFloat(a.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('f-div'));
    div.style.display = 'block';
}
function verify_force() {
    let btn = document.getElementById('temp-btn-f');
    let f_inp = document.getElementById('f-inp');
    let sp3 = document.getElementById('f-val-sp');
    if (!verify_values(parseFloat(parseFloat(f_inp.value).toFixed(2)), parseFloat(f.toFixed(2)))) {
        alert(`incorrect value of pressure`);
        return;
    }
    f_inp.remove();
    sp3.innerText = `${parseFloat(f.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('ig-div'));
    div.style.display = 'block';
}
function verify_ig() {
    let btn = document.getElementById('temp-btn-ig');
    let ig_inp = document.getElementById('ig-inp');
    let sp4 = document.getElementById('ig-val-sp');
    if (!verify_values(parseFloat(parseFloat(ig_inp.value).toFixed(2)), parseFloat(ig.toFixed(2)))) {
        alert(`incorrect value of pressure`);
        return;
    }
    ig_inp.remove();
    sp4.innerText = `${parseFloat(ig.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('hstar-div'));
    div.style.display = 'block';
}
function verify_hstar() {
    let btn = document.getElementById('temp-btn-hstar');
    let hstar_inp = document.getElementById('hstar-inp');
    let sp5 = document.getElementById('hstar-val-sp');
    if (!verify_values(parseFloat(parseFloat(hstar_inp.value).toFixed(2)), parseFloat(h_star.toFixed(2)))) {
        alert(`incorrect value of pressure`);
        return;
    }
    hstar_inp.remove();
    sp5.innerText = `${parseFloat(h_star.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    exp_complete();
}
function exp_complete() {
    let btn = (document.getElementById('temp-btn-act2-spwt'));
    btn && btn.remove();
    alert('Experiment completed');
}
activity1();
//# sourceMappingURL=activity1.js.map