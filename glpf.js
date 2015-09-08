
        function fade(btnElement) {
            if (btnElement.value === "Back to Status Quo") {
                document.getElementById("newApproachImg").className = "fade-out";
 				document.getElementById("statusQuoImg").className = "fade-in";
 				document.getElementById("statusQuoText").className = "fade-in";
                document.getElementById("newApproachText").className = "fade-out";

                btnElement.value = "See New Approach";

            }
        else {
                document.getElementById("newApproachImg").className = "fade-in";
				document.getElementById("statusQuoImg").className = "fade-out";
				document.getElementById("statusQuoText").className = "fade-out";
                document.getElementById("newApproachText").className = "fade-in";

                btnElement.value = "Back to Status Quo";

            }
        }
