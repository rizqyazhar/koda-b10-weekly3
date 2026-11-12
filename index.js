const generateModalNav = () => {
  $("body").append(`
  <div id="modal-nav" class="absolute z-50 inset-0 w-full min-h-dvh bg-black/30 flex flex-row-reverse">
      <div class="w-1/2 h-full flex flex-col bg-[rgba(255,253,248,1)]">
        <div class="flex flex-row-reverse p-5">
           <button id="close-modal-nav" class="cursor-pointer">
             <svg class="menu-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x preview-icon"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
           </button>
        </div>
        <div class="flex flex-col">
          <a href="/live-feed.html" class="pl-5 py-5 text-sm font-[500] text-[rgba(76,91,82,1)] border-b border-[rgba(215,203,182,1)]">Live Feed</a>
          <a href="/track.html" class="pl-5 py-5 text-sm font-[500] text-[rgba(76,91,82,1)] border-b border-[rgba(215,203,182,1)]">Track</a>
          <a href="/help.html" class="pl-5 py-5 text-sm font-[500] text-[rgba(76,91,82,1)] border-b border-[rgba(215,203,182,1)]">How it works</a>
        </div>
        <div class="mt-10 w-full flex items-center justify-center gap-3">
          <a href="/login.html" class="button button-secondary">
            <img src="/img/icons/login-icon.svg" alt="/login-icon" />
            Sign In
          </a>
          <button class="button button-primary">
            <img src="/img/icons/plus-icon.svg" alt="/plus-icon" />
            Report
          </button>
        </div>
      </div>
    </div>
  `);
};

const generateModalNavLoggedIn = () => {
  $("body").append(`
  <div id="modal-nav" class="absolute z-50 inset-0 w-full min-h-dvh bg-black/30 flex flex-row-reverse">
      <div class="w-1/2 h-full flex flex-col bg-[rgba(255,253,248,1)]">
        <div class="flex flex-row-reverse p-5">
           <button id="close-modal-nav" class="cursor-pointer">
             <svg class="menu-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x preview-icon"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
           </button>
        </div>
        <div class="flex flex-col">
          <a href="/live-feed.html" class="pl-5 py-5 text-sm font-[500] text-[rgba(76,91,82,1)] border-b border-[rgba(215,203,182,1)]">Live Feed</a>
          <a href="/track.html" class="pl-5 py-5 text-sm font-[500] text-[rgba(76,91,82,1)] border-b border-[rgba(215,203,182,1)]">Track</a>
          <a href="/help.html" class="pl-5 py-5 text-sm font-[500] text-[rgba(76,91,82,1)] border-b border-[rgba(215,203,182,1)]">How it works</a>
        </div>
        <div class="mt-10 w-full flex flex-col items-center justify-center gap-3">
          <div>
            <div class="user-info-toggle">
              <div class="user-photo">FS</div>
              <div class="user-info">
                <span>Fahrul Septiana</span>
                <span>citizen</span>
              </div>
              <div class="chevron-down-icon"></div>
            </div>
          </div>
          <div class="flex items-center justify-center gap-5">
            <a href="/notification.html" class="notif-icon-box">
              <div class="notif-icon"></div>
              <div class="green-circle"></div>
            </a>
            <button class="button button-primary">
              <img src="/img/icons/plus-icon.svg" alt="/plus-icon" />
              Report
            </button>
          </div>
        </div>
      </div>
    </div>
  `);
};

$("#open-modal-nav-logged-in").click(function () {
  $("body").css("overflow", "hidden");
  generateModalNavLoggedIn($(this));
});

$(document).on("click", "#close-modal-nav", function () {
  $("body").css("overflow", "visible");
  $("#modal-nav").remove();
});

$("#open-modal-nav").click(function () {
  $("body").css("overflow", "hidden");
  generateModalNav($(this));
});

$(document).on("click", "#close-modal-nav", function () {
  $("body").css("overflow", "visible");
  $("#modal-nav").remove();
});
