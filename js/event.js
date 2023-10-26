window.onload = function () {
    // 이벤트 페이지 탭메뉴
    const titles = document.querySelectorAll(".event-info-titles .event-info-title");
    const infoBoxes = document.querySelectorAll(".event-info-box");
    let hoveredTitle = null;

    titles.forEach((title, index) => {
        title.addEventListener("mouseenter", () => {
            // 이전에 호버된 title의 호버 클래스를 제거
            if (hoveredTitle !== null) {
                hoveredTitle.classList.remove("hovered");
            }

            // 모든 infoBoxes를 숨김
            infoBoxes.forEach((box) => {
                box.style.display = "none";
            });

            // 호버한 title의 data-target 속성을 가져와 해당하는 infoBox를 표시
            const target = title.getAttribute("data-target");
            const targetBox = document.querySelector(`.${target}`);
            targetBox.style.display = "flex";

            // 호버 효과를 부여하고 현재 호버한 title 저장
            title.classList.add("hovered");
            hoveredTitle = title;
        });
    });
};