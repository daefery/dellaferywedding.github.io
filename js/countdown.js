!(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
    "use strict";
    function e(t) {
        if (t instanceof Date) return t;
        if (String(t).match(a)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
        throw new Error("Couldn't cast `" + t + "` to a date object.");
    }
    function s(t) {
        return function (e) {
            var s = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (s)
                for (var i = 0, a = s.length; i < a; ++i) {
                    var r = s[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        h = new RegExp(r[0]),
                        l = r[1] || "",
                        c = r[3] || "",
                        f = null;
                    (r = r[2]), o.hasOwnProperty(r) && ((f = o[r]), (f = Number(t[f]))), null !== f && ("!" === l && (f = n(c, f)), "" === l && f < 10 && (f = "0" + f.toString()), (e = e.replace(h, f.toString())));
                }
            return (e = e.replace(/%%/, "%"));
        };
    }
    function n(t, e) {
        var s = "s",
            n = "";
        return t && (1 === (t = t.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? (s = t[0]) : ((n = t[0]), (s = t[1]))), 1 === Math.abs(e) ? n : s;
    }
    var i = [],
        a = [];
    a.push(/^[0-9]*$/.source), a.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), a.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), (a = new RegExp(a.join("|")));
    var o = { Y: "years", m: "months", w: "weeks", d: "days", D: "totalDays", H: "hours", M: "minutes", S: "seconds" },
        r = function (e, s, n) {
            (this.el = e),
                (this.$el = t(e)),
                (this.interval = null),
                (this.offset = {}),
                this.setFinalDate(s),
                (this.instanceNumber = i.length),
                i.push(this),
                this.$el.data("countdown-instance", this.instanceNumber),
                n && (this.$el.on("update.countdown", n), this.$el.on("stoped.countdown", n), this.$el.on("finish.countdown", n)),
                this.start();
        };
    t.extend(r.prototype, {
        start: function () {
            if (null !== this.interval) throw new Error("Countdown is already running!");
            var t = this;
            this.update(),
                (this.interval = setInterval(function () {
                    t.update.call(t);
                }, 100));
        },
        stop: function () {
            clearInterval(this.interval), (this.interval = null), this.dispatchEvent("stoped");
        },
        pause: function () {
            this.stop.call(this);
        },
        resume: function () {
            this.start.call(this);
        },
        remove: function () {
            this.stop(), delete i[this.instanceNumber], delete this.$el.data().countdownInstance;
        },
        setFinalDate: function (t) {
            this.finalDate = e(t);
        },
        update: function () {
            0 !== this.$el.closest("html").length
                ? ((this.totalSecsLeft = this.finalDate.valueOf() - new Date().valueOf()),
                  (this.totalSecsLeft = Math.ceil(this.totalSecsLeft / 1e3)),
                  (this.totalSecsLeft = this.totalSecsLeft < 0 ? 0 : this.totalSecsLeft),
                  (this.offset = {
                      seconds: this.totalSecsLeft % 60,
                      minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                      hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                      days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                      totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                      weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                      months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
                      years: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 365),
                  }),
                  0 === this.totalSecsLeft ? (this.stop(), this.dispatchEvent("finish")) : this.dispatchEvent("update"))
                : this.remove();
        },
        dispatchEvent: function (e) {
            var n = t.Event(e + ".countdown");
            (n.finalDate = this.finalDate), (n.offset = t.extend({}, this.offset)), (n.strftime = s(this.offset)), this.$el.trigger(n);
        },
    }),
        (t.fn.countdown = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                var s = t(this).data("countdown-instance");
                if (void 0 !== s) {
                    var n = i[s],
                        a = e[0];
                    r.prototype.hasOwnProperty(a) ? n[a].apply(n, e.slice(1)) : null === String(a).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? n.setFinalDate.call(n, a) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, a));
                } else new r(this, e[0], e[1]);
            });
        });
});
