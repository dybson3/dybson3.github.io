/*
 * PL / EN language switch. Polish is the default.
 *
 * How to write bilingual content:
 *   Text:        <span lang="pl">Cześć</span><span lang="en">Hi</span>
 *                (any element works; CSS hides the inactive language)
 *   Attributes:  Polish value in the attribute, English in data-en-<attr>:
 *                <a aria-label="Udostępnij" data-en-aria-label="Share">
 *                supported: aria-label, title, content, alt
 *   <title>:     <title data-en-text="English title">Polski tytuł</title>
 *
 * Share an English link with ?lang=en. The choice is remembered per browser.
 * Pages can listen for document 'langchange' (detail = 'pl' | 'en').
 */
(function () {
    var KEY = 'bd_lang';
    var ATTRS = ['aria-label', 'title', 'content', 'alt', 'text'];
    var root = document.documentElement;

    function initial() {
        var q = /[?&]lang=(pl|en)(?:&|$)/.exec(location.search);
        if (q) return q[1];
        try {
            var s = localStorage.getItem(KEY);
            if (s === 'pl' || s === 'en') return s;
        } catch (e) {}
        return 'pl';
    }

    function swapAttrs(lang) {
        ATTRS.forEach(function (a) {
            var nodes = document.querySelectorAll('[data-en-' + a + ']');
            for (var i = 0; i < nodes.length; i++) {
                var el = nodes[i], plKey = 'data-pl-' + a;
                if (!el.hasAttribute(plKey)) {
                    el.setAttribute(plKey, a === 'text' ? el.textContent : (el.getAttribute(a) || ''));
                }
                var v = el.getAttribute(lang === 'en' ? 'data-en-' + a : plKey);
                if (a === 'text') el.textContent = v; else el.setAttribute(a, v);
            }
        });
        var sw = document.querySelectorAll('[data-lang-switch]');
        for (var j = 0; j < sw.length; j++) {
            sw[j].setAttribute('aria-label', lang === 'en' ? 'Zmień język na polski' : 'Switch to English');
            sw[j].setAttribute('title', lang === 'en' ? 'Polski' : 'English');
        }
    }

    function apply(lang) {
        root.setAttribute('lang', lang);
        swapAttrs(lang);
        var ev;
        try { ev = new CustomEvent('langchange', { detail: lang }); }
        catch (e) { ev = document.createEvent('CustomEvent'); ev.initCustomEvent('langchange', false, false, lang); }
        document.dispatchEvent(ev);
    }

    function set(lang) {
        try { localStorage.setItem(KEY, lang); } catch (e) {}
        try {
            var url = new URL(location.href);
            if (lang === 'en') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
            history.replaceState(null, '', url.pathname + url.search + url.hash);
        } catch (e) {}
        apply(lang);
    }

    window.bdLang = {
        get: function () { return root.getAttribute('lang') === 'en' ? 'en' : 'pl'; },
        set: set
    };

    // Set the language before first paint so the wrong one never flashes.
    var lang = initial();
    root.setAttribute('lang', lang);

    document.addEventListener('click', function (e) {
        var b = e.target.closest && e.target.closest('[data-lang-switch]');
        if (!b) return;
        e.preventDefault();
        set(window.bdLang.get() === 'en' ? 'pl' : 'en');
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { apply(lang); });
    } else {
        apply(lang);
    }
})();
