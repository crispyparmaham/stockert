
// Tabs if you want
/**
 * Tab Markup
<div class="tab-wrapper">
        <div class="tab-navigation">
            <button class="warum active">Philosophie</button>
            <button class="fachbereiche">Service</button>
        </div>
        <div class="tab-contents">
            <div class="warum-tab active tab">
                Tab Content #1
            </div>
            <div class="serviceleistungen-tab tab">
                Tab Content #2
            </div>
        </div>
</div>
 */

document.addEventListener("DOMContentLoaded", () => {
    let tabNavigation = document.querySelectorAll(".tab-navigation > button");
    let tabContents = document.querySelectorAll(".tab-contents > .tab");
    for (let i in tabNavigation) {
        let btn = tabNavigation[i];
        btn.addEventListener("click", () => {
            for (let others of tabNavigation) {
                others.classList.remove("active");
            }
            btn.classList.add("active");
            for (let othertabs of tabContents) {
                othertabs.classList.remove("active");
            }
            tabContents[i].classList.add("active");
        });
    }
});