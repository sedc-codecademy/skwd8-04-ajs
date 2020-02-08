let navService = {
    $navItems: $(".nav-item"),
    $pages: $("#pages").children(),
    activateItem: function($item) {
        this.$navItems.removeClass("active");
        $item.addClass("active");
    },
    showPage: function($page) {
        this.$pages.css("display", "none");
        $page.css("display", "block");
    },
    registerNavListeners: function() {
        this.$navItems.each(function (index, element) {
           $(element).on('click', function () {
                navService.activateItem($(this));
                navService.showPage(navService.$pages.eq(index));
           });
        });
    }
};

navService.registerNavListeners();