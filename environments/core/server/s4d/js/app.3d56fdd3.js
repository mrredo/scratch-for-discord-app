(function (e) {
    function t(t) {
        for (var a, s, i = t[0], l = t[1], c = t[2], _ = 0, d = []; _ < i.length; _++) (s = i[_]), Object.prototype.hasOwnProperty.call(o, s) && o[s] && d.push(o[s][0]), (o[s] = 0);
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        E && E(t);
        while (d.length) d.shift()();
        return r.push.apply(r, c || []), n();
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, i = 1; i < n.length; i++) {
                var l = n[i];
                0 !== o[l] && (a = !1);
            }
            a && (r.splice(t--, 1), (e = s((s.s = n[0]))));
        }
        return e;
    }
    var a = {},
        o = { app: 0 },
        r = [];
    function s(t) {
        if (a[t]) return a[t].exports;
        var n = (a[t] = { i: t, l: !1, exports: {} });
        return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
    }
    (s.m = e),
        (s.c = a),
        (s.d = function (e, t, n) {
            s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (s.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (s.t = function (e, t) {
            if ((1 & t && (e = s(e)), 8 & t)) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((s.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var a in e)
                    s.d(
                        n,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return n;
        }),
        (s.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e["default"];
                      }
                    : function () {
                          return e;
                      };
            return s.d(t, "a", t), t;
        }),
        (s.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (s.p = "/");
    var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        l = i.push.bind(i);
    (i.push = t), (i = i.slice());
    for (var c = 0; c < i.length; c++) t(i[c]);
    var E = l;
    r.push([0, "chunk-vendors"]), n();
})({
    0: function (e, t, n) {
        e.exports = n("56d7");
    },
    "034f": function (e, t, n) {
        "use strict";
        var a = n("85ec"),
            o = n.n(a);
        o.a;
    },
    "03bd": function (e) {
        e.exports = JSON.parse(
            '{"BASE_BLOCKS":"Blocos de base","MESSAGE_RELATED_BLOCKS":"Bloqueios relacionados a mensagens","REPLY":"responder %1","LOGIN":"Conecte-se ao Discord com o token %1","LOGIN_TOOLTIP":"Conecte seu bot ao Discord. Para obter seu token de bot, vá para https://discord.com/developers/.","ON_MESSAGE":"Quando uma mensagem é recebida","ON_CONNECTED":"Quando o bot está conectado","ON_CONNECTED_TOOLTIP":"Evento emitido quando seu bot está conectado ao Discord.","MESSAGE_ID":"message ID","MESSAGE_CONTENT":"conteudo da mensagem","MESSAGE_AUTHOR":"autor da mensagem","MESSAGE_AUTHOR_RAW":"%1 do autor da mensagem","USERNAME":"apelido","NICKNAME":"sobrenome","GET_GUILD":"encontre servidor %1 usando %2","NAME":"nome","REPLACE":"no texto %1 troque %2 com %3","RES_REPLACE_STRING":"Você precisa me ta um texto para troca!","RES_REPLACE_REPLACE":"Você precisa me fala oque você quer troca no texto!","RES_REPLACE_WITH":"Você precisa me fala com qual vai ser o novo valor!","ADD_ROLE":"adicione cargo %1 do membro %2","INCLUDES":"%1 tem %2","RES_INCLUDES_TEXT":"Você precisa me ta um texto para ver se tem algo nele!","RES_INCLUDES_INCLUDES":"Você precisa me ta um texto para ver se tem no outro texto!","BAN_MEMBER":"banir membro %1","KICK_MEMBER":"kicka membro %1","SEND_MEMBER":"send %1 to member %2","MESSAGE_GUILD":"servidor da mensagem","MESSAGE_CHANNEL":"canal da mensagem","BASIC_BLOCKS":"blocos basicos","ADVANCED_BLOCKS":"blocos avançados","MENTIONED_MEMBER":"membro mensianado","PURGE":"no canal %1 delete %2 memsagens","CHANNEL_MESSAGE_ACTIONS":"Ações nas mensagens do canal","RES_PURGE_AMOUNT":"Você precisa especifica a quantidade de mensagens para deleta!","RES_PURGE_CHANNEL":"Voce precisa especifica o canal!","FOOTER":"footer","THUMBNAIL":"thumbnail","ADMINISTRATOR":"Administrator","DETECT_MESSAGES":"Detectar mensagem","MESSAGE_ACTIONS":"Ações na mensagem","RELATED_TO_MESSAGE_STRINGS":"Strings relacionadas à mensagem","DELETE_MESSAGE":"deleta a mensagem","RES_ADD_REACTION_MISSING_REACTION":"você precisa adiciona um emoji valido !","ADD_REACTION":"adiciona reação %1 para a mensagem","MESSAGE_EMBED":"Message Embed","COLOR":"cor","TITLE":"titulo","MESSAGE":"mensagem","IMAGE":"image","TOOLS":"ferramentas","CHECK_PERMISSIONS":"Verifique as permissões dos membros","MEMBER_HAS_PERMISSION":"o membro %1 tem permissão %2","PERM_CREATE_INSTANT_INVITE":"criar convites instantâneos","PERM_KICK_MEMBERS":"kicka membros","PERM_BAN_MEMBERS":"banir membros","PERM_ADMINISTRATOR":"administrator","PERM_MANAGE_CHANNELS":"gerenciar canais","PERM_MANAGE_GUILD":"gerenciar servidores","PERM_ADD_REACTIONS":"adiciona reação","PERM_VIEW_AUDIT_LOG":"ver registros de auditoria","PERM_PRIORITY_SPEAKER":"Voz Prioritária","PERM_VIEW_CHANNEL":"ver canal","PERM_READ_MESSAGES":"ler mensagens","PERM_SEND_MESSAGES":"mandar mensagens","PERM_SEND_TTS_MESSAGES":"manda TTS mensagens","PERM_MANAGE_MESSAGES":"gerenciar mensagens","PERM_EMBED_LINKS":"embed links","PERM_ATTACH_FILES":"anexar arquivos","PERM_READ_MESSAGE_HISTORY":"ler histórico de mensagens","PERM_MENTION_EVERYONE":"mencionar @everyone","PERM_EXTERNAL_EMOJIS":"ver emojis externos","PERM_USE_EXTERNAL_EMOJIS":"usar emojis externos","PERM_CONNECT":"conectar","PERM_SPEAK":"falar","PERM_MUTE_MEMBERS":"mutar membros","PERM_DEAFEN_MEMBERS":"membros surdos","PERM_MOVE_MEMBERS":"mover membros","PERM_USE_VAD":"usar atividade de voz","PERM_CHANGE_NICKNAME":"troca sobrenome","PERM_MANAGE_NICKNAMES":"gerenciar sobrenomes","PERM_MANAGE_ROLES":"gerenciar cargos","PERM_MANAGE_WEBHOOKS":"gerenciar webhooks","PERM_MANAGE_EMOJIS":"Blocos relacionados a associações de membros","DETECT_JOINS":"Detectar entrada","ON_MEMBER_JOIN":"Quando um membro se junta a um servidor","JOINING_MEMBER_INFORMATIONS":"Informações sobre o membro","JOINING_MEMBER":"membro entrado","RELATED_TO_JOIN_STRINGS":"Strings relacionadas a entrada","JOINING_MEMBER_RAW":"%1 do membro que entrou","JOINING_GUILD":"servidor onde o membro entrou","TEMPORARILY":"Temporariamente","HOURS":"horas","REASON":"motivo","DURING_HOURS":"durante","WITH_REASON":"com o motivo","RES_MUST_BE_IN_ON_MESSAGE":"Este bloco só pode ser usado em um \\"Quando uma mensagem é recebida\\" evento","RES_MISSING_CONTENT":"Você deve especificar um conteúdo válido para responder!","RES_MISSING_MEMBER_HAS_PERMISSION":"Você deve especificar um membro válido para verificar as permissões!","RES_MUST_BE_IN_ON_MEMBER_JOIN":"Este bloco só pode ser usado em um \\"Quando um membro se junta a um servidor\\" evento","RES_ADD_ROLE_MISSING_ROLE":"Você deve especificar um nome ou ID de um cargo válido para adicionar!","RES_ADD_ROLE_MISSING_MEMBER":"você teve especifica um membro valido para adiciona o cargo nele!","RES_REMOVE_ROLE_MISSING_ROLE":"Você deve especificar um nome ou ID de um cargo válido para remove","RES_REMOVE_ROLE_MISSING_MEMBER":"você teve especifica um membro valido para remove o cargo nele!","RES_KICK_MEMBER_MISSING_MEMBER":"você teve especifica um membro valido para ser kickado!","RES_BAN_MEMBER_MISSING_MEMBER":"você teve especifica um membro valido para ser banido!","RES_SEND_MEMBER_MISSING_MEMBER":"You must specify a valid member to send the message to!","MANDATORY_BLOCKS":"Blocos obrigatorios","FIND_CHANNEL":"Encontre um canal","SEND_CHANNEL_LABEL":"Envie uma mensagem no canal encontrado","GET_CHANNEL":"pegue o salão com %2 igual a %1","RES_MISSING_CHANNEL_VALUE":"você teve especifica um nome ou id de um canal valido!","RES_SEND_CHANNEL_CONTENT":"você teve especifica um conteudo para manda!","RES_SEND_CHANNEL_CHANNEL":"Você deve especificar um canal para enviar o conteúdo!","SEND_CHANNEL":"envie %1 no canal %2","TOOLBOX_LOGIC":"Logica","TOOLBOX_LOOPS":"Loops","TOOLBOX_MATH":"Matematica","TOOLBOX_TEXT":"Texto","TOOLBOX_LISTS":"Listas","TOOLBOX_COLORS":"Cors","TOOLBOX_VARIABLES":"Variaveis","TOOLBOX_FUNCTIONS":"Funções","TOOLBOX_CHANNELS":"Canais","TOOLBOX_ACTIONS":"Ações","TOOLBOX_BASE":"Base","TOOLBOX_SERVER":"Servers","TOOLBOX_ROLES":"Cargos","FIND_SERVER":"Encontre um servidor","GET_SERVER":"encontre um servidor com %2 igual a %1","RES_GET_SERVER_SERVER":"você precisa especifica um nome ou id de um servidor valido!","LABEL_SERVER_INFOS":"Informações sobre o servidor","MEMBER_COUNT":"numero de membros no servidor %1","RES_VALID_SERVER":"você precisa coloca um servidor valido!","ICON_URL":"icone url do servidor %1","SERVER_NAME":"nome do servidor %1","SERVER_OWNER":"dono do servidor %1","RES_SET_SERVER_NAME_SERVER":"você precisa especifica um servidor valido!","RES_SET_SERVER_NAME_NEW_NICKNAME":"você precisa especifica um nome novo valido!","LABEL_MODIFY_SERVER":"Modifique o servidor","SET_SERVER_NAME":"troque o nome do servidor %1 nome novo %2","GET_ROLE_SERVER":"no servidor","GET_ROLE":"pegue o cargo com %2 igual a %1","RES_GET_ROLE_VALUE":"você precisa especifica um nome ou id de um cargo valido!","RES_GET_SERVER_VALUE":"você precisa especifica um nome ou id de um servidor valido!","FIND_ROLE":"Encontre um cargo","ROLE_ASSIGNMENT":"Atribuição de cargos","FIND_MEMBER":"Encontre um membro","GET_MEMBER":"encontre um membro com %2 igual a %1 no servidor %3","INIT_TOOLTIP":"Permite que você use blocos Discord!","JOINING_GUILD_RAW":"%1 do membro que entrou no servidor","LABEL_MEMBER_ACTIONS":"Ações no membro","LABEL_MESSAGE_CONTEXT":"Contexto da mensagem","MESSAGE_CHANNEL_RAW":"%1 do canal da mensagem","MESSAGE_GUILD_RAW":"%1 do servidor da mensagem","RES_GET_MEMBER_SERVER":"você precisa especifica um servidor valido onde o membro esta!","RES_GET_MEMBER_VALUE":"você precisa especifica um nome ou id de um membro valido!","TOOLBOX_MEMBERS":"Membro","MEMBER_INFORMATIONS":"Informações dos membros","RES_VALID_MEMBER":"Você deve especificar um membro válido!","MEMBER_DISCRIMINATOR":"discriminador de membro %1","MEMBER_ID":"id do membro %1","MEMBER_TAG":"tag do membro %1","MEMBER_USERNAME":"sobrenome do membro %1","MEMBER_IS_BOT":"membro %1 é um bot","SET_MEMBER_NICKNAME":"troque o apelido  %1 novo apelido %2","RES_SET_MEMBER_NICKNAME_MEMBER":"Você deve especificar um membro válido para alterar o apelido","RES_SET_MEMBER_NICKNAME_NEW_NICKNAME":"Você deve especificar um novo apelido válido para o membro!","SERVER_BOOST_COUNT":"numero de impulsos no servidor %1","SERVER_BOOST_LEVEL":"nível de impulso do servidor %1","SEND_WAIT_REPLY":"envie %1 no canal %2 e espere por uma resposta do membro %3 durante (minutos) %4 quando uma resposta é recebida %5 se nenhuma responde vo recebida %6","RES_SEND_WAIT_REPLY_VALUE_PARENT":"Este bloco só pode ser usado em um bloco \\"Aguardar uma resposta\\"!","SEND_WAIT_REPLY_VALUE":"resposta do membro","FORMS":"Formulários","SEND_WAIT_REPLY_EXAMPLE":"Qual é o seu nome??","REPLY_EXAMPLE":"Hey!","ON_REACT_ADDED":"Quando uma reação é adicionada","REACT_RELATED_BLOCKS":"Blocos relacionados a reações","DETECT_REACT":"Eu estou escrevendo, estou escrevendo","REACT_INFORMATIONS":"Informações sobre a reação adicionada / removida","REACT_MESSAGE_ID":"ID da mensagem de reação","RES_MUST_BE_IN_ON_REACT":"Este bloco só pode ser usado em um bloco de \\"reação adicionada\\" ou em um bloco \\"reação removida\\"!","REACT_EMOJI":"emoji da reação","REACT_MEMBER":"membro que reaciu","ON_REACT_REMOVED":"Quando uma reação é removida","BOT_PING":"bot ping","BOT_INFORMATIONS":"Informação do bot","BOT_ACTIONS":"Ações no bot","RES_MISSING_GAME":"Você deve especificar um jogo para o bot!","SET_BOT_GAME":"definir o jogo de bot para %1","BOT_SERVER_COUNT":"contagem de servidores bot","TOOLBOX_E_JOINS":"Entradas","TOOLBOX_E_MESSAGES":"Mensagems","TOOLBOX_E_REACTIONS":"Reações","TOOLBOX_DATABASE":"Banco de dados","GET_DATA":"pegue %1 do banco de dados","LABEL_READ_DB":"banco de dados","LABEL_UPDATE_DB":"atualiza banco de dados","SET_DATA":"setar %1 para %2 no banco de dados","DELETE_DATA":"deletar %1 banco de dados","HAS_DATA":"%1 existe no banco de dados","ADD_DATA":"adiciona %1 para %2","SUBTRACT_DATA":"remover %1 do %2","DETECT_LEAVES":"Detectar licenças","LEAVING_GUILD":"deixando o servidor membro","LEAVING_GUILD_RAW":"%1 do servidor do membro que está saindo","LEAVING_MEMBER_INFORMATIONS":"Informações sobre o membro","LEAVES_RELATED_BLOCKS":"Bloqueios relacionados às saídas de membros","ON_MEMBER_LEAVE":"Quando um membro sai de um servidor","RELATED_TO_LEAVE_STRINGS":"Strings relacionados a saida","TOOLBOX_E_LEAVES":"Saidas","RES_MUST_BE_IN_ON_MEMBER_LEAVE":"Este bloco só pode ser usado em um evento \\"Quando um membro deixa um servidor \\"","LEAVING_MEMBER_RAW":"%1 do membro que saiu do servidor","WAIT_SECONDS":"espere %1 segundos","TOOLBOX_OTHER":"Outros","STARTS_WITH":"%1 começa com %2","RUN_SAVE_OUTPUT":"faça %1 e salve a saída em %2","TOOLBOX_MESSAGES":"mensagens","GET_MESSAGE":"obter mensagem com ID igual a %1 no canal %2","RES_GET_MESSAGE_CHANNEL":"Você deve especificar um canal válido no qual a mensagem é!","RES_GET_MESSAGE_VALUE":"Você deve especificar um ID de mensagem válido!","FIND_MESSAGE":"Encontre a mensagem","MESSAGE_INFORMATIONS":"Informações sobre a mensagem","CURRENT":"%1 atual","HOUR":"hora","MINUTE":"minuto","MONTH":"mês","DAY_OF_WEEK":"dia da semana","SECOND":"segundo","DATE":"data","FOREVER":"repita para sempre %1 faz %2","YES":"sim","NO":"não","CREATE_CHANNEL":"crie um canal com o nome %1 no servidor %2 do tipo %3","CHANNEL_ACTIONS":"Ações para o canal","TEXT":"texto","VOICE":"voz","CATEGORY":"categoria","NEWLINE":"linha nova","REMOVE_ROLE":"tira o cargo %1 do membro %2","JOINS_RELATED_BLOCKS":"Blocos relacionados a entrada de membros"}'
        );
    },
    "207c": function (e, t, n) {},
    "39f7": function (e, t, n) {
        "use strict";
        var a = n("a930"),
            o = n.n(a);
        o.a;
    },
    "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("1276"), n("ac1f");
        var a = n("2b0e"),
            o = n("5f5b"),
            r = n("b1e0"),
            s = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { attrs: { id: "app" } }, [n("NavBarComponent", { attrs: { id: "navSpace" } }), n("BlocklyComponent", { attrs: { id: "blocklySpace", options: e.options } }), n("v-tour", { attrs: { name: "start-tour", steps: e.vueTourOptions.steps, options: e.vueTourOptions } })], 1);
            },
            i = [],
            l = n("54ca"),
            c = n.n(l),
            E = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    "b-navbar",
                    { attrs: { toggleable: "lg", type: "dark", variant: "info", id: "navbar" } },
                    [
                        n("b-navbar-brand", [n("img", { attrs: { src: "scratch.png", width: "40" } }), e._v(" Scratch For Discord ")]),
                        n("b-navbar-toggle", { attrs: { target: "nav-collapse" } }),
                        n(
                            "b-collapse",
                            { attrs: { id: "nav-collapse", "is-nav": "" } },
                            [
                                n("b-navbar-nav", [n("CodeModal"), n("FileMenu"), n("EditMenu"), n("LanguageMenu"), n("ExamplesMenu"), n("b-nav-item", { attrs: { href: "https://androz2091.gitbook.io/scratch-for-discord/", target: "_blank" } }, [e._v(e._s(e.$t("help")))])], 1),
                                n(
                                    "b-navbar-nav",
                                    { staticClass: "ml-auto" },
                                    [
                                        n("RunModal"),
                                        n("b-button", { staticStyle: { "border-right-color": "#3DA2B8", "border-radius": "0em", "border-top-left-radius": "0.25em", "border-bottom-left-radius": "0.25em" } }, [
                                            n("span", { attrs: { contenteditable: "true", id: "docName" } }, [e._v(e._s(e.$t("untitled")))])
                                        ]),
                                        n(
                                            "b-button",
                                            { directives: [{ name: "b-modal", rawName: "v-b-modal.run-modal", modifiers: { "run-modal": !0 } }], staticStyle: { "border-right-color": "#3DA2B8", "border-radius": "0em" }, attrs: { id: "v-step-1", disabled: !e.configurationValidated } },
                                            [n("b-icon-play")],
                                            1
                                        ),
                                        n("b-button", { staticStyle: { "border-radius": "0em", "border-top-right-radius": "0.25em", "border-bottom-right-radius": "0.25em" }, attrs: { id: "v-step-2", disabled: !e.configurationValidated }, on: { click: e.exportToCode } }, [n("b-icon-download")], 1)
                                    ],
                                    1
                                )
                            ],
                            1
                        )
                    ],
                    1
                );
            },
            _ = [],
            d = (n("99af"), n("5319"), n("2b3d"), n("d3b7"), n("3ca3"), n("ddb0"), n("c4e3")),
            u = n.n(d),
            m = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    "b-nav-item-dropdown",
                    { attrs: { text: e.$t("file.title"), right: "" } },
                    [
                        n("b-dropdown-item", { on: { click: e.askForFile } }, [e._v(e._s(e.$t("file.open")))]),
                        n("input", { attrs: { hidden: "", id: "load-code", type: "file", accept: ".s4d" }, on: { change: e.load } }),
                        n("b-dropdown-item", { directives: [{ name: "b-modal", rawName: "v-b-modal.code-modal", modifiers: { "code-modal": !0 } }] }, [e._v(e._s(e.$t("file.javascript")))]),
                        n("b-dropdown-item", { on: { click: e.save } }, [e._v(e._s(e.$t("file.save")))])
                    ],
                    1
                );
            },
            p = [],
            S =
                (n("fb6a"),
                n("b0c0"),
                {
                    name: "filemenu",
                    methods: {
                        viewCode: function () {
                            alert(this.getWorkspaceCode());
                        },
                        askForFile: function () {
                            document.querySelector("#load-code").click();
                        },
                        load: function () {
                            var e = this,
                                t = document.getElementById("load-code").files[0],
                                n = t.name.split(".").slice(0, t.name.split(".").length - 1);
                            document.querySelector("#docName").textContent = n;
                            var a = new FileReader();
                            (a.onload = function (t) {
                                u.a
                                    .loadAsync(t.target.result)
                                    .then(function (e) {
                                        if (e.file("blocks.xml")) return e.file("blocks.xml").async("string");
                                    })
                                    .then(function (t) {
                                        var n = c.a.Xml.textToDom(t);
                                        c.a.Xml.domToWorkspace(n, e.$store.state.workspace);
                                    })
                                    .catch(function () {
                                        e.$toast.open({ message: e.$t("load.error"), type: "error", dismissible: !0, duration: 1e4 });
                                    });
                            }),
                                t && (a.readAsArrayBuffer(t), document.getElementById("load-code").setAttribute("value", ""));
                        },
                        save: function () {
                            var e = new u.a(),
                                t = c.a.Xml.domToPrettyText(c.a.Xml.workspaceToDom(this.$store.state.workspace)),
                                n = "".concat(encodeURIComponent(document.querySelector("#docName").textContent).replace(/%20/g, " "), ".s4d");
                            e.file("blocks.xml", t),
                                e.generateAsync({ type: "blob" }).then(function (e) {
                                    var t = document.createElement("a");
                                    (t.style = "display: none"), document.body.appendChild(t);
                                    var a = window.URL.createObjectURL(e);
                                    (t.href = a), (t.download = n), t.click(), window.URL.revokeObjectURL(a), document.body.removeChild(t);
                                });
                        }
                    }
                }),
            v = S,
            R = n("2877"),
            b = Object(R["a"])(v, m, p, !1, null, null, null),
            A = b.exports,
            M = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    "b-nav-item-dropdown",
                    { attrs: { text: e.$t("edit.title"), right: "" } },
                    [
                        n("b-dropdown-item", { on: { click: e.undo } }, [e._v(e._s(e.$t("edit.undo")))]),
                        n("b-dropdown-item", { on: { click: e.redo } }, [e._v(e._s(e.$t("edit.redo")))]),
                        n("b-dropdown-item", { on: { click: e.clear } }, [e._v(e._s(e.$t("edit.clear", { blockCount: e.blockCount })))]),
                        n("b-dropdown-item", { on: { click: e.cleanUp } }, [e._v(e._s(e.$t("edit.cleanup")))]),
                        n("b-dropdown-item", { on: { click: e.clearDB } }, [e._v(e._s(e.$t("edit.cleardb")))])
                    ],
                    1
                );
            },
            T = [],
            N =
                (n("159b"),
                {
                    name: "editmenu",
                    computed: {
                        blockCount: function () {
                            return this.$store.state.workspace ? this.$store.state.workspace.getAllBlocks().length : 0;
                        }
                    },
                    methods: {
                        undo: function () {
                            this.$store.state.workspace.undo(!1);
                        },
                        redo: function () {
                            this.$store.state.workspace.undo(!0);
                        },
                        clear: function () {
                            this.$store.state.workspace.getAllBlocks().forEach(function (e) {
                                return e.dispose();
                            });
                        },
                        cleanUp: function () {
                            this.$store.state.workspace.cleanUp();
                        },
                        clearDB: function () {
                            localStorage.setItem("easyjsondatabase", "{}");
                        }
                    }
                }),
            O = N,
            g = Object(R["a"])(O, M, T, !1, null, null, null),
            f = g.exports,
            I = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    "b-nav-item-dropdown",
                    { attrs: { text: e.$t("lang.title"), right: "" } },
                    [
                        n(
                            "b-dropdown-item",
                            {
                                on: {
                                    click: function (t) {
                                        return e.changeLanguage("en");
                                    }
                                }
                            },
                            [e._v("English (EN)")]
                        ),
                        n(
                            "b-dropdown-item",
                            {
                                on: {
                                    click: function (t) {
                                        return e.changeLanguage("fr");
                                    }
                                }
                            },
                            [e._v("Français (FR)")]
                        ),
                        n(
                            "b-dropdown-item",
                            {
                                on: {
                                    click: function (t) {
                                        return e.changeLanguage("pt");
                                    }
                                }
                            },
                            [e._v("Português (PT)")]
                        )
                    ],
                    1
                );
            },
            h = [],
            y = {
                name: "languagemenu",
                methods: {
                    changeLanguage: function (e) {
                        this.$store.commit("setLocale", { newLocale: e }), this.setLanguage(e), this.reloadWorkspace();
                    }
                }
            },
            B = y,
            k = Object(R["a"])(B, I, h, !1, null, null, null),
            C = k.exports,
            D = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("b-modal", { attrs: { id: "run-modal", "hide-footer": "", title: e.$t("run_modal.title") } }, [
                    n(
                        "div",
                        { staticClass: "d-block" },
                        [
                            n(
                                "b-container",
                                [
                                    e.electronApp
                                        ? e._e()
                                        : n(
                                              "b-row",
                                              [
                                                  n("i18n", {
                                                      attrs: { path: "run_modal.disabled", tag: "h5" },
                                                      scopedSlots: e._u(
                                                          [
                                                              {
                                                                  key: "here",
                                                                  fn: function () {
                                                                      return [n("a", { attrs: { href: "https://androz2091.github.io/scratch-for-discord/download/index.html", target: "_blank" } }, [e._v(e._s(e.$t("run_modal.here")))])];
                                                                  },
                                                                  proxy: !0
                                                              }
                                                          ],
                                                          null,
                                                          !1,
                                                          608003906
                                                      )
                                                  })
                                              ],
                                              1
                                          ),
                                    n("hr"),
                                    n(
                                        "b-row",
                                        [
                                            n("b-col", { attrs: { sm: "12", lg: "8" } }, [
                                                n(
                                                    "div",
                                                    { staticClass: "botinfos" },
                                                    [
                                                        n("b-overlay", { staticClass: "d-inline-block", attrs: { show: e.botStarting, rounded: "circle" } }, [n("div", { style: e.getBotImageStyle() })]),
                                                        n("span", { class: e.getUsernameSpanClass() }, [e._v("Logged in as " + e._s(e.botTag || "Unknown#0000"))])
                                                    ],
                                                    1
                                                )
                                            ]),
                                            n("b-col", [
                                                n(
                                                    "div",
                                                    { staticClass: "handlebuttondiv" },
                                                    [
                                                        n(
                                                            "b-overlay",
                                                            { ref: "button", staticClass: "d-inline-block", attrs: { show: e.botStarting, rounded: "", opacity: "0.6", "spinner-small": "", "spinner-variant": "primary" }, on: { hidden: e.onHidden } },
                                                            [
                                                                n(
                                                                    "b-button",
                                                                    {
                                                                        directives: [{ name: "b-tooltip", rawName: "v-b-tooltip.hover", modifiers: { hover: !0 } }],
                                                                        class: e.getHandleButtonClass(),
                                                                        attrs: { title: e.getTooltipContent() },
                                                                        on: {
                                                                            click: function (t) {
                                                                                return e.handle();
                                                                            }
                                                                        }
                                                                    },
                                                                    [n("font-awesome-icon", { attrs: { icon: "power-off" } })],
                                                                    1
                                                                )
                                                            ],
                                                            1
                                                        )
                                                    ],
                                                    1
                                                )
                                            ])
                                        ],
                                        1
                                    )
                                ],
                                1
                            )
                        ],
                        1
                    )
                ]);
            },
            L = [],
            U = n("904b"),
            G = U["a"],
            w = (n("39f7"), Object(R["a"])(G, D, L, !1, null, null, null)),
            V = w.exports,
            x = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    "b-nav-item-dropdown",
                    { attrs: { id: "v-step-0", text: e.$t("examples.title"), right: "" } },
                    [
                        n(
                            "b-dropdown-item",
                            {
                                on: {
                                    click: function (t) {
                                        return e.load("ping-pong");
                                    }
                                }
                            },
                            [e._v(e._s(e.$t("examples.ping_pong")))]
                        ),
                        n(
                            "b-dropdown-item",
                            {
                                on: {
                                    click: function (t) {
                                        return e.load("command-parsing");
                                    }
                                }
                            },
                            [e._v(e._s(e.$t("examples.command_parsing")))]
                        ),
                        n(
                            "b-dropdown-item",
                            {
                                on: {
                                    click: function (t) {
                                        return e.load("leveling");
                                    }
                                }
                            },
                            [e._v(e._s(e.$t("examples.leveling")))]
                        )
                    ],
                    1
                );
            },
            P = [],
            J = n("53ca"),
            Y =
                '\n    <xml xmlns="https://developers.google.com/blockly/xml">\n        <block type="s4d_login" id=")O7+PL3eS1Br}h;?X9N$" x="288" y="163">\n            <value name="TOKEN">\n                <block type="text" id="a7JxIIyK[Yr~TPL^-{W:">\n                    <field name="TEXT">Your bot token</field>\n                </block>\n            </value>\n        </block>\n        <block type="s4d_on_message" id="Qx+aIDM=_,mj^tl$vGmW" x="288" y="238">\n            <statement name="STATEMENTS">\n                <block type="controls_if" id="Cr$f.P2*Nq2Dl}?D!r`(">\n                    <value name="IF0">\n                        <block type="logic_compare" id="oq-Tf{oSnv,],{N*FSF|">\n                            <field name="OP">EQ</field>\n                            <value name="A">\n                                <block type="s4d_message_content" id="pyFMNvR6J#o6Ky/UA~]f" />\n                            </value>\n                            <value name="B">\n                                <block type="text" id=";[??XKp36YJf2U}j2_}e">\n                                    <field name="TEXT">!ping</field>\n                                </block>\n                            </value>\n                        </block>\n                    </value>\n                    <statement name="DO0">\n                        <block type="s4d_reply" id="wgo^7yFoMz,K{AaMl6L)">\n                            <value name="CONTENT">\n                                <block type="text" id="N-4C!JnJCe,s$75i%8Ce">\n                                    <field name="TEXT">pong!</field>\n                                </block>\n                            </value>\n                        </block>\n                    </statement>\n                </block>\n            </statement>\n        </block>\n    </xml>\n',
            K =
                '\n    <xml xmlns="https://developers.google.com/blockly/xml">\n        <variables>\n            <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>\n            <variable id="dN-GQox{6nqmX%so5NT^">command</variable>\n        </variables>\n        <block type="s4d_login" id="{|lO_b-0fA9`}/b6#m6T" x="62" y="12">\n            <value name="TOKEN">\n                <block type="text" id="T3=]`vNu7E~Pv%]r^%YC">\n                <field name="TEXT">Your bot token</field>\n                </block>\n            </value>\n        </block>\n        <block type="s4d_on_message" id="+Q@qA4DZ.)H0dU~:qJFA" x="62" y="112">\n            <statement name="STATEMENTS">\n                <block type="variables_set" id="Fo+ksP#~73~o,EeQmq{u">\n                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>\n                <value name="VALUE">\n                    <block type="lists_split" id="1YzV9Eu2@GGwP5RREIIR">\n                    <mutation mode="SPLIT"></mutation>\n                    <field name="MODE">SPLIT</field>\n                    <value name="INPUT">\n                        <block type="s4d_message_content" id="E#m(;pB|W+d+AtJCc{5e"></block>\n                    </value>\n                    <value name="DELIM">\n                        <shadow type="text" id="Z.|mO+X9gt-/BR;jjMkI">\n                        <field name="TEXT"> </field>\n                        </shadow>\n                    </value>\n                    </block>\n                </value>\n                <next>\n                    <block type="variables_set" id="U^i0Ox!/+F6x[NrTqTpR">\n                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>\n                    <value name="VALUE">\n                        <block type="lists_getIndex" id="9ul#e70.^`!G^_~-BlK~">\n                        <mutation statement="false" at="true"></mutation>\n                        <field name="MODE">GET_REMOVE</field>\n                        <field name="WHERE">FROM_START</field>\n                        <value name="VALUE">\n                            <block type="variables_get" id="z-Mavm-5KXE/Y;G)]0%i">\n                            <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>\n                            </block>\n                        </value>\n                        <value name="AT">\n                            <block type="math_number" id="n6Es1J;;TYupl;g]g)Eg">\n                            <field name="NUM">1</field>\n                            </block>\n                        </value>\n                        </block>\n                    </value>\n                    <next>\n                        <block type="controls_if" id="3XA36VU);D_1N5vf9p(Z">\n                        <value name="IF0">\n                            <block type="logic_compare" id="1igBlMs)G_=BaFXSd3rc">\n                            <field name="OP">EQ</field>\n                            <value name="A">\n                                <block type="variables_get" id="764~nc#(*|4bhyY/,K{h">\n                                <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>\n                                </block>\n                            </value>\n                            <value name="B">\n                                <block type="text" id="[P2gt2r%QKJF3|~Q$E~+">\n                                <field name="TEXT">!say</field>\n                                </block>\n                            </value>\n                            </block>\n                        </value>\n                        <statement name="DO0">\n                            <block type="s4d_reply" id="-{l,tE6ZGFbL6`Pn_@~#">\n                            <value name="CONTENT">\n                                <shadow type="text" id="aL1?|+/#9ra54-jg7_Gm">\n                                <field name="TEXT">You have written the following content after !say:</field>\n                                </shadow>\n                            </value>\n                            <next>\n                                <block type="s4d_reply" id=")aBPXtsn1JD-vhr:VEL-">\n                                <value name="CONTENT">\n                                    <shadow type="text" id="9FEK`)XQ20Dm!SwfYg}5">\n                                    <field name="TEXT">Salut!</field>\n                                    </shadow>\n                                    <block type="lists_split" id="dXoK}l3=r:Qu|E|[I_EZ">\n                                    <mutation mode="JOIN"></mutation>\n                                    <field name="MODE">JOIN</field>\n                                    <value name="INPUT">\n                                        <block type="variables_get" id=":}|4XGnUc}sJZ_qIWFFX">\n                                        <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>\n                                        </block>\n                                    </value>\n                                    <value name="DELIM">\n                                        <shadow type="text" id="R/4CiqYnjEYgTePNX7l=">\n                                        <field name="TEXT"> </field>\n                                        </shadow>\n                                    </value>\n                                    </block>\n                                </value>\n                                </block>\n                            </next>\n                            </block>\n                        </statement>\n                        </block>\n                    </next>\n                    </block>\n                </next>\n                </block>\n            </statement>\n        </block>\n    </xml>\n',
            j =
                '\n<xml xmlns="https://developers.google.com/blockly/xml">\n  <variables>\n    <variable id="M[vaD@JoJPb/1tEa6?p~">member_xp</variable>\n    <variable id="+@B4vb]CdaQAcV3iYZ3L">member_level</variable>\n  </variables>\n  <block type="s4d_login" id="|rEc6MK@B`#CAd.0nrou" x="-713" y="-88">\n    <value name="TOKEN">\n      <block type="text" id="#-0;+I4Z4Ja.7?i1tEC#">\n        <field name="TEXT">Your bot token</field>\n      </block>\n    </value>\n  </block>\n  <block type="s4d_on_message" id="i=%I:.GpXHXHR-MazeNH" x="-713" y="-12">\n    <statement name="STATEMENTS">\n      <block type="controls_if" id="MfL_sev~ks[YLX%tm:st">\n        <value name="IF0">\n          <block type="logic_negate" id="N!ILu_]4_BvksLxRV4wK">\n            <value name="BOOL">\n              <block type="s4d_member_is_bot" id="2-0d8n$Y]7()h.o7O*Y2">\n                <value name="MEMBER">\n                  <block type="s4d_message_author" id="^Ro{ic}Z@hR$-,X!^]/S"></block>\n                </value>\n              </block>\n            </value>\n          </block>\n        </value>\n        <statement name="DO0">\n          <block type="variables_set" id="~}l5zZhB7uE~@8N@HI,q">\n            <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>\n            <value name="VALUE">\n              <block type="s4d_get_data" id="w^H/=6#PE0py+]@Dzo[n">\n                <value name="KEY">\n                  <shadow type="text" id="88r!7qHuf3[MAZi)[.Ap">\n                    <field name="TEXT">hello</field>\n                  </shadow>\n                  <block type="text_join" id="t|;4SUYtCcIm=SMnP1RA">\n                    <mutation items="2"></mutation>\n                    <value name="ADD0">\n                      <block type="text" id="F1})AwLPmPBJPiB/.X!@">\n                        <field name="TEXT">xp-</field>\n                      </block>\n                    </value>\n                    <value name="ADD1">\n                      <block type="s4d_message_author_raw" id="Rj[w_ZyGOWe)#cBT)b%b">\n                        <field name="SEARCH_TYPE">ID</field>\n                      </block>\n                    </value>\n                  </block>\n                </value>\n              </block>\n            </value>\n            <next>\n              <block type="variables_set" id="^`ZAnTvZB/C`!s|i4wW8">\n                <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>\n                <value name="VALUE">\n                  <block type="s4d_get_data" id="h5b5dBE76^+Si[[@nzpR">\n                    <value name="KEY">\n                      <shadow type="text">\n                        <field name="TEXT">hello</field>\n                      </shadow>\n                      <block type="text_join" id="|w0zLKo6a!VjZ[`h]ie1">\n                        <mutation items="2"></mutation>\n                        <value name="ADD0">\n                          <block type="text" id="/_`/W`B=E:hKeVdrB0[5">\n                            <field name="TEXT">level-</field>\n                          </block>\n                        </value>\n                        <value name="ADD1">\n                          <block type="s4d_message_author_raw" id="]%Zo:C(Zm2cd[[cA=OP2">\n                            <field name="SEARCH_TYPE">ID</field>\n                          </block>\n                        </value>\n                      </block>\n                    </value>\n                  </block>\n                </value>\n                <next>\n                  <block type="controls_if" id="AwKZxHL{ez%!sm2pTZ:N">\n                    <mutation elseif="1"></mutation>\n                    <value name="IF0">\n                      <block type="logic_negate" id=")BL3sNk,s[7k[D=)5Wb-">\n                        <value name="BOOL">\n                          <block type="variables_get" id="EL@M$sfQwo4_kp:H[Ego">\n                            <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>\n                          </block>\n                        </value>\n                      </block>\n                    </value>\n                    <statement name="DO0">\n                      <block type="variables_set" id="u,h(12V3!js1cM8_EsWD">\n                        <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>\n                        <value name="VALUE">\n                          <block type="math_number" id="3K{AwEiQ|xzrqsTvjM*0">\n                            <field name="NUM">0</field>\n                          </block>\n                        </value>\n                      </block>\n                    </statement>\n                    <value name="IF1">\n                      <block type="logic_negate" id="R*H!?sV5!C,Lx+OJs#jM">\n                        <value name="BOOL">\n                          <block type="variables_get" id="u_yI(T/!%YChjJAIcj[$">\n                            <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>\n                          </block>\n                        </value>\n                      </block>\n                    </value>\n                    <statement name="DO1">\n                      <block type="variables_set" id="#_ki4I?oh@v0db%WCXzi">\n                        <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>\n                        <value name="VALUE">\n                          <block type="math_number" id="v*z}8{H/jC9v:7uxTn#9">\n                            <field name="NUM">0</field>\n                          </block>\n                        </value>\n                      </block>\n                    </statement>\n                    <next>\n                      <block type="s4d_set_data" id="`7WbsnzyzwNl%gCO%9J9">\n                        <value name="KEY">\n                          <shadow type="text" id="Q.iRfNq!Jgox/.hB5Bs}">\n                            <field name="TEXT">hello</field>\n                          </shadow>\n                          <block type="text_join" id=":HW].AU64kQwP~m3dI^g">\n                            <mutation items="2"></mutation>\n                            <value name="ADD0">\n                              <block type="text" id="_R=tGhLLUkSBHi_jk!">\n                                <field name="TEXT">xp-</field>\n                              </block>\n                            </value>\n                            <value name="ADD1">\n                              <block type="s4d_message_author_raw" id="W!dQlYRxcQy~uu+j%onT">\n                                <field name="SEARCH_TYPE">ID</field>\n                              </block>\n                            </value>\n                          </block>\n                        </value>\n                        <value name="VALUE">\n                          <shadow type="text" id=":6^F`uO_USAFvH*$p9S~">\n                            <field name="TEXT">world</field>\n                          </shadow>\n                          <block type="math_arithmetic" id="wK29a{2jG2kU-?0hFhqR">\n                            <field name="OP">ADD</field>\n                            <value name="A">\n                              <shadow type="math_number" id="GM/dp{=o8js[D}i09`b^">\n                                <field name="NUM">1</field>\n                              </shadow>\n                              <block type="variables_get" id="ONqeqk89!f=j}!*L7;PL">\n                                <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>\n                              </block>\n                            </value>\n                            <value name="B">\n                              <shadow type="math_number" id=".K2[!`fX!l9vw!p51c!N">\n                                <field name="NUM">1</field>\n                              </shadow>\n                            </value>\n                          </block>\n                        </value>\n                        <next>\n                          <block type="variables_set" id="s?jTk;tHQ]fYWv^re!7j">\n                            <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>\n                            <value name="VALUE">\n                              <block type="math_arithmetic" id="E)ATuTT-KyjPm,M=JdwP">\n                                <field name="OP">ADD</field>\n                                <value name="A">\n                                  <shadow type="math_number">\n                                    <field name="NUM">1</field>\n                                  </shadow>\n                                  <block type="variables_get" id="t0-[e[+LUi|~z/;*dp#6">\n                                    <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>\n                                  </block>\n                                </value>\n                                <value name="B">\n                                  <shadow type="math_number" id="]z~}4N-c?LinHgC|kVmO">\n                                    <field name="NUM">1</field>\n                                  </shadow>\n                                </value>\n                              </block>\n                            </value>\n                            <next>\n                              <block type="controls_if" id="=-T,u2,YqI(b-,5R-raJ">\n                                <value name="IF0">\n                                  <block type="logic_compare" id="2bDZYW1aw[iAcj6jy2o*">\n                                    <field name="OP">GT</field>\n                                    <value name="A">\n                                      <block type="variables_get" id="R3qfLFppQKY36e!(k`uh">\n                                        <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>\n                                      </block>\n                                    </value>\n                                    <value name="B">\n                                      <block type="math_number" id="K%+C!jxTTKzP,~bTIQ#s">\n                                        <field name="NUM">100</field>\n                                      </block>\n                                    </value>\n                                  </block>\n                                </value>\n                                <statement name="DO0">\n                                  <block type="s4d_set_data" id="(-b?AF=}h+7kqqm`x)@=">\n                                    <value name="KEY">\n                                      <shadow type="text">\n                                        <field name="TEXT">hello</field>\n                                      </shadow>\n                                      <block type="text_join" id="`hFN7Yl,*qK`Fy/*uC}{">\n                                        <mutation items="2"></mutation>\n                                        <value name="ADD0">\n                                          <block type="text" id="NIpT7$oFJOwy@/ga5s+#">\n                                            <field name="TEXT">level-</field>\n                                          </block>\n                                        </value>\n                                        <value name="ADD1">\n                                          <block type="s4d_message_author_raw" id=":FZ;uMH7;/2aHmyJSD_Y">\n                                            <field name="SEARCH_TYPE">ID</field>\n                                          </block>\n                                        </value>\n                                      </block>\n                                    </value>\n                                    <value name="VALUE">\n                                      <shadow type="text">\n                                        <field name="TEXT">world</field>\n                                      </shadow>\n                                      <block type="math_arithmetic" id="mVh6;B0CWdne-%@s-,R;">\n                                        <field name="OP">ADD</field>\n                                        <value name="A">\n                                          <shadow type="math_number">\n                                            <field name="NUM">1</field>\n                                          </shadow>\n                                          <block type="variables_get" id="HELI-rppC{2{:JXRZZ2_">\n                                            <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>\n                                          </block>\n                                        </value>\n                                        <value name="B">\n                                          <shadow type="math_number" id="P:L?@*mm?(R[hD)oUiHe">\n                                            <field name="NUM">1</field>\n                                          </shadow>\n                                        </value>\n                                      </block>\n                                    </value>\n                                    <next>\n                                      <block type="variables_set" id="BgXDQa45|TjY$inY!uy=">\n                                        <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>\n                                        <value name="VALUE">\n                                          <block type="math_arithmetic" id="iE-Gj#gv~B6n]zoM6OYl">\n                                            <field name="OP">ADD</field>\n                                            <value name="A">\n                                              <shadow type="math_number">\n                                                <field name="NUM">1</field>\n                                              </shadow>\n                                              <block type="variables_get" id=")4f,y[AS~[eziQP6oy~i">\n                                                <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>\n                                              </block>\n                                            </value>\n                                            <value name="B">\n                                              <shadow type="math_number" id="9j04Bn#=cd5{AIdY:p.#">\n                                                <field name="NUM">1</field>\n                                              </shadow>\n                                            </value>\n                                          </block>\n                                        </value>\n                                        <next>\n                                          <block type="s4d_reply" id="e,mtP-XG1y;zync)}qdU">\n                                            <value name="CONTENT">\n                                              <shadow type="text" id="xT2PT;Qo)Nuw7a=8s=$j">\n                                                <field name="TEXT">Salut!</field>\n                                              </shadow>\n                                              <block type="text_join" id="_BHM*Q=qtcbpbnf$Zu92">\n                                                <mutation items="5"></mutation>\n                                                <value name="ADD0">\n                                                  <block type="text" id="%+!]Dt.S]{Ioo~dX|^22">\n                                                    <field name="TEXT">Congratulations, </field>\n                                                  </block>\n                                                </value>\n                                                <value name="ADD1">\n                                                  <block type="s4d_message_author" id="ggQ[+aM[.Ml|,[Bv:OB0"></block>\n                                                </value>\n                                                <value name="ADD2">\n                                                  <block type="text" id="4MsXLy0texd3plR9Uj{c">\n                                                    <field name="TEXT">you jumped to level </field>\n                                                  </block>\n                                                </value>\n                                                <value name="ADD3">\n                                                  <block type="variables_get" id="6mrLVVv|S4nIJ%MMc^Nq">\n                                                    <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>\n                                                  </block>\n                                                </value>\n                                                <value name="ADD4">\n                                                  <block type="text" id="g?7rO4hF+JjCKY5Zq@e*">\n                                                    <field name="TEXT">!!</field>\n                                                  </block>\n                                                </value>\n                                              </block>\n                                            </value>\n                                          </block>\n                                        </next>\n                                      </block>\n                                    </next>\n                                  </block>\n                                </statement>\n                                <next>\n                                  <block type="controls_if" id="$]k-m(;+PW!Y)ZhSQsJ.">\n                                    <mutation elseif="1"></mutation>\n                                    <value name="IF0">\n                                      <block type="logic_compare" id="FA9h-?ZQp31zoC,-CJj?">\n                                        <field name="OP">EQ</field>\n                                        <value name="A">\n                                          <block type="s4d_message_content" id="QW9fD=khz9ml7Y{X`_~0"></block>\n                                        </value>\n                                        <value name="B">\n                                          <block type="text" id="W_@NL7X,en6waLiu/eNn">\n                                            <field name="TEXT">!level</field>\n                                          </block>\n                                        </value>\n                                      </block>\n                                    </value>\n                                    <statement name="DO0">\n                                      <block type="s4d_reply" id="ECw;)=}O[mTwG[R)65ZU">\n                                        <value name="CONTENT">\n                                          <shadow type="text" id="n1@ol$k#rsjQ8uFcc^B:">\n                                            <field name="TEXT">Salut!</field>\n                                          </shadow>\n                                          <block type="text_join" id="@R:tUMom]M232DDjLyi=">\n                                            <mutation items="3"></mutation>\n                                            <value name="ADD0">\n                                              <block type="s4d_message_author" id="H|zP9k/8vnf2g8G24Toz"></block>\n                                            </value>\n                                            <value name="ADD1">\n                                              <block type="text" id="iX(DW[~h)*`MRy0gY2A@">\n                                                <field name="TEXT">, you are currently level: </field>\n                                              </block>\n                                            </value>\n                                            <value name="ADD2">\n                                              <block type="variables_get" id="ahx}S^8VdjY~#}/-NXD]">\n                                                <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>\n                                              </block>\n                                            </value>\n                                          </block>\n                                        </value>\n                                      </block>\n                                    </statement>\n                                    <value name="IF1">\n                                      <block type="logic_compare" id="Ws]$L;eS[]E,~vSSZFXc">\n                                        <field name="OP">EQ</field>\n                                        <value name="A">\n                                          <block type="s4d_message_content" id="t$a4Rj`p]Z*XTXL#[URF"></block>\n                                        </value>\n                                        <value name="B">\n                                          <block type="text" id="6SAlzvfzT4`qGSs@FPYE">\n                                            <field name="TEXT">!xp</field>\n                                          </block>\n                                        </value>\n                                      </block>\n                                    </value>\n                                    <statement name="DO1">\n                                      <block type="s4d_reply" id="~QZ8R39dl)(twOjjXr]w">\n                                        <value name="CONTENT">\n                                          <shadow type="text">\n                                            <field name="TEXT">Salut!</field>\n                                          </shadow>\n                                          <block type="text_join" id="Y!x8?.0jWWnr5Lp]?k!n">\n                                            <mutation items="5"></mutation>\n                                            <value name="ADD0">\n                                              <block type="s4d_message_author" id="|G/@9fZe@`%~TwJ@KQB/"></block>\n                                            </value>\n                                            <value name="ADD1">\n                                              <block type="text" id="9RIm=A!+pQ/uATenE)oP">\n                                                <field name="TEXT">, you need </field>\n                                              </block>\n                                            </value>\n                                            <value name="ADD2">\n                                              <block type="math_arithmetic" id="#k7xdN{K1em1;g4x(4r,">\n                                                <field name="OP">MINUS</field>\n                                                <value name="A">\n                                                  <shadow type="math_number" id="AOgc*g=oG+.dQ9JyEXR-">\n                                                    <field name="NUM">100</field>\n                                                  </shadow>\n                                                </value>\n                                                <value name="B">\n                                                  <shadow type="math_number" id="k[[G+xVv)AoAC$7{OS?G">\n                                                    <field name="NUM">100</field>\n                                                  </shadow>\n                                                  <block type="variables_get" id="Jv~.y|;NFyQ9TD$|ZGwI">\n                                                    <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>\n                                                  </block>\n                                                </value>\n                                              </block>\n                                            </value>\n                                            <value name="ADD3">\n                                              <block type="text" id="C]/q-tyzgRtj~?~w$2E#">\n                                                <field name="TEXT"> to jump to level </field>\n                                              </block>\n                                            </value>\n                                            <value name="ADD4">\n                                              <block type="math_arithmetic" id="ny^4i;T7mbDK{@WB@B6v">\n                                                <field name="OP">ADD</field>\n                                                <value name="A">\n                                                  <shadow type="math_number" id="qw:DB*#:O-@6K*6cJIq0">\n                                                    <field name="NUM">1</field>\n                                                  </shadow>\n                                                  <block type="variables_get" id="NHy%/wvKxeou}^ExT9}/">\n                                                    <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>\n                                                  </block>\n                                                </value>\n                                                <value name="B">\n                                                  <shadow type="math_number" id="BJv^%DY.Y?-7^KnZcm{x">\n                                                    <field name="NUM">1</field>\n                                                  </shadow>\n                                                </value>\n                                              </block>\n                                            </value>\n                                          </block>\n                                        </value>\n                                      </block>\n                                    </statement>\n                                  </block>\n                                </next>\n                              </block>\n                            </next>\n                          </block>\n                        </next>\n                      </block>\n                    </next>\n                  </block>\n                </next>\n              </block>\n            </next>\n          </block>\n        </statement>\n      </block>\n    </statement>\n  </block>\n</xml>\n',
            H = { "ping-pong": Y, "command-parsing": K, leveling: j },
            X = {
                name: "editmenu",
                computed: {},
                methods: {
                    load: function (e) {
                        var t = this;
                        this.$swal({
                            title: this.$t("examples.confirm.title"),
                            text: this.$t("examples.confirm.text"),
                            buttons: { cancel: this.$t("examples.confirm.cancel"), no: { text: this.$t("examples.confirm.no"), value: !1, className: "red-button" }, yes: { text: this.$t("examples.confirm.yes"), value: !0 } },
                            closeOnClickOutside: !1
                        }).then(function (n) {
                            if ("object" !== Object(J["a"])(n)) {
                                n &&
                                    t.$store.state.workspace.getAllBlocks().forEach(function (e) {
                                        return e.dispose();
                                    });
                                var a = H[e];
                                c.a.Xml.domToWorkspace(c.a.Xml.textToDom(a), t.$store.state.workspace),
                                    setTimeout(function () {
                                        t.$toast.open({ message: t.$t("examples.loaded", { example: e }), type: "success", dismissible: !0, duration: 1e4 });
                                    }, 200);
                            }
                        });
                    }
                }
            },
            F = X,
            W = Object(R["a"])(F, x, P, !1, null, null, null),
            $ = W.exports,
            z = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("b-modal", { attrs: { id: "code-modal", title: e.$t("code_modal.title"), "ok-only": "" } }, [n("textarea", { attrs: { disabled: "", id: "code" }, domProps: { value: e.content } })]);
            },
            q = [],
            Q = n("e552"),
            Z = n.n(Q),
            ee = {
                name: "editmenu",
                computed: {
                    content: function () {
                        return Z.a.js(this.getWorkspaceCode(), { indent_size: 4, space_in_empty_paren: !0 });
                    }
                }
            },
            te = ee,
            ne = (n("627b"), Object(R["a"])(te, z, q, !1, null, null, null)),
            ae = ne.exports,
            oe = {
                name: "navbar",
                components: { FileMenu: A, EditMenu: f, LanguageMenu: C, RunModal: V, ExamplesMenu: $, CodeModal: ae },
                computed: {
                    configurationValidated: function () {
                        return (
                            this.$store.state.workspace &&
                            this.$store.state.workspace.getAllBlocks().some(function (e) {
                                return "s4d_login" === e.type;
                            }) &&
                            this.$store.state.workspace.getAllBlocks().every(function (e) {
                                return !e.disabled && !e.warning;
                            })
                        );
                    }
                },
                mounted: function () {
                    document.getElementById("docName").addEventListener(
                        "input",
                        function () {
                            document.title = "Scratch For Discord - ".concat(document.querySelector("#docName").textContent);
                        },
                        !1
                    );
                    var e = document.querySelector("#docName");
                    (e.spellcheck = !1), e.focus(), e.blur();
                },
                methods: {
                    exportToCode: function () {
                        var e = this,
                            t = document.createElement("div");
                        (t.innerHTML = "<h6>"
                            .concat(this.$t("download.content.title"), "</h6><ul><li style='text-align:left'>")
                            .concat(this.$t("download.content.unzipFile"), "</li><li style='text-align:left'>")
                            .concat(this.$t("download.content.node"), "</li><li style='text-align:left'>")
                            .concat(this.$t("download.content.start"), "</li><li style='text-align:left'>")
                            .concat(this.$t("download.content.done"), "</li></ul>")),
                            this.$swal({ title: this.$t("download.title"), content: t, buttons: { cancel: this.$t("download.cancel"), confirm: this.$t("download.confirm") } }).then(function (t) {
                                if (t) {
                                    var n = new u.a(),
                                        a = c.a.Xml.domToPrettyText(c.a.Xml.workspaceToDom(e.$store.state.workspace)),
                                        o = "".concat(encodeURIComponent(document.querySelector("#docName").textContent).replace(/%20/g, " "), ".zip");
                                    n.file("blocks.xml", a);
                                    var r = e.getWorkspaceCode();
                                    n.file("bot.js", r),
                                        n.file(".replit", 'run = "node bot.js"'),
                                        n.file("package.json", JSON.stringify({ name: "scratch-for-discord-bot", version: "1.0.0", main: "bot.js", scripts: { start: "node ." }, dependencies: { "discord.js": "^12.5.1", "easy-json-database": "^1.3.0" } })),
                                        n.generateAsync({ type: "blob" }).then(function (e) {
                                            var t = document.createElement("a");
                                            (t.style = "display: none"), document.body.appendChild(t);
                                            var n = window.URL.createObjectURL(e);
                                            (t.href = n), (t.download = o), t.click(), window.URL.revokeObjectURL(n), document.body.removeChild(t);
                                        });
                                }
                            });
                    }
                }
            },
            re = oe,
            se = Object(R["a"])(re, E, _, !1, null, null, null),
            ie = se.exports,
            le = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("div", { ref: "blocklyDiv", staticClass: "blocklyDiv", attrs: { id: "blocklyDiv" } }), n("xml", { ref: "blocklyToolbox", staticStyle: { display: "none" } }, [e._t("default")], 2)], 1);
            },
            ce = [],
            Ee = n("5530"),
            _e = n("b85c"),
            de = (n("a15b"), n("2ca0"), n("caad"), n("2532"), n("4de4"), {});
        function ue(e, t) {
            de[e] = t;
        }
        var me = function (e) {
                var t = document.createElement("textarea");
                return (t.innerHTML = e), t.value;
            },
            pe = function (e) {
                var t,
                    n = e.getAllBlocks(!1),
                    a = Object(_e["a"])(n);
                try {
                    for (a.s(); !(t = a.n()).done; ) {
                        var o = t.value;
                        if (o) {
                            de[o.type] || (de[o.type] = []);
                            var r,
                                s = [],
                                i = 0,
                                l = Object(_e["a"])(de[o.type]);
                            try {
                                for (l.s(); !(r = l.n()).done; ) {
                                    var E = r.value;
                                    ve(o, E) && (Se(o, n, E) || (E.message && (c.a.Msg[E.message] ? s.push(c.a.Msg[E.message]) : (window.alert("KEY NOT FOUND: " + E.message), s.push(me(E.message)))), i++));
                                }
                            } catch (_) {
                                l.e(_);
                            } finally {
                                l.f();
                            }
                            i < 1 ? o.setWarningText(null) : s.length > 0 && o.setWarningText(s.join("\n"));
                        }
                    }
                } catch (_) {
                    a.e(_);
                } finally {
                    a.f();
                }
            };
        function Se(e, t, n) {
            var a = !1,
                o = n.type;
            switch (("custom" !== o && o.startsWith("!") && ((o = o.substring(1)), (a = !0)), o)) {
                case "toplevelparent":
                    return n.types.includes(be(e).type) !== a;
                case "blockexists":
                    return (
                        t.filter(function (e) {
                            return n.types.includes(e.type) && !e.disabled;
                        }).length >
                            0 !==
                        a
                    );
                case "parent":
                    return n.types.includes(e.getParent().type) !== a;
                case "hasparent":
                    return Re(e, n.types) !== a;
                case "notempty":
                    var r,
                        s = Object(_e["a"])(n.types);
                    try {
                        for (s.s(); !(r = s.n()).done; ) {
                            var i = r.value;
                            try {
                                if (!e.getInput(i).connection.targetBlock()) return !1;
                            } catch (l) {
                                console.log(e.type);
                            }
                        }
                    } catch (c) {
                        s.e(c);
                    } finally {
                        s.f();
                    }
                    return !0;
                default:
                    return !0;
            }
        }
        function ve(e, t) {
            switch (t.type) {
                case "toplevelparent":
                case "!toplevelparent":
                    return be(e) && !be(e).disabled;
                case "blockexists":
                case "!blockexists":
                    return !0;
                case "parent":
                case "!parent":
                    return e.getParent() && !e.getParent().disabled;
                case "hasparent":
                case "custom":
                case "notempty":
                    return !0;
                default:
                    return !1;
            }
        }
        function Re(e, t) {
            var n = !1;
            while (e.getParent()) t.includes(e.getParent().type) && (n = !0), (e = e.getParent());
            return n;
        }
        function be(e) {
            return e ? (e.getParent() ? be(e.getParent()) : e) : null;
        }
        var Ae = function (e) {
                return '\n    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">\n        <category name="{{ TOOLBOX_LOGIC }}" colour="#5b80a5">\n            <block type="controls_if" />\n            <block type="logic_compare">\n                <field name="OP">EQ</field>\n            </block>\n            <block type="logic_operation">\n                <field name="OP">AND</field>\n            </block>\n            <block type="logic_negate" />\n            <block type="logic_boolean">\n                <field name="BOOL">TRUE</field>\n            </block>\n            <block type="logic_null" />\n            <block type="logic_ternary" />\n        </category>\n        <category name="{{ TOOLBOX_LOOPS }}" colour="#5ba55b">\n            <block type="s4d_forever">\n            </block>\n            <block type="controls_repeat_ext">\n                <value name="TIMES">\n                    <shadow type="math_number">\n                        <field name="NUM">10</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="controls_whileUntil">\n                <field name="MODE">WHILE</field>\n            </block>\n            <block type="controls_for">\n                <field name="VAR" id="0D`BNNIb2nl,{_^LQ.ro">i</field>\n                <value name="FROM">\n                    <shadow type="math_number">\n                        <field name="NUM">1</field>\n                    </shadow>\n                </value>\n                <value name="TO">\n                    <shadow type="math_number">\n                        <field name="NUM">10</field>\n                    </shadow>\n                </value>\n                <value name="BY">\n                    <shadow type="math_number">\n                        <field name="NUM">1</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="controls_forEach">\n                <field name="VAR" id="_U%=Z#c;|yP-K;;aC%(K">j</field>\n            </block>\n            <block type="controls_flow_statements">\n                <field name="FLOW">BREAK</field>\n            </block>\n        </category>\n        <category name="{{ TOOLBOX_MATH }}" colour="#5b67a5">\n            <block type="math_number">\n                <field name="NUM">0</field>\n            </block>\n            <block type="math_arithmetic">\n                <field name="OP">ADD</field>\n                <value name="A">\n                    <shadow type="math_number">\n                        <field name="NUM">1</field>\n                    </shadow>\n                </value>\n                <value name="B">\n                    <shadow type="math_number">\n                        <field name="NUM">1</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="math_single">\n                <field name="OP">ROOT</field>\n                <value name="NUM">\n                    <shadow type="math_number">\n                        <field name="NUM">9</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="math_trig">\n                <field name="OP">SIN</field>\n                <value name="NUM">\n                    <shadow type="math_number">\n                        <field name="NUM">45</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="math_constant">\n                <field name="CONSTANT">PI</field>\n            </block>\n            <block type="math_number_property">\n                <mutation divisor_input="false" />\n                <field name="PROPERTY">EVEN</field>\n                <value name="NUMBER_TO_CHECK">\n                    <shadow type="math_number">\n                        <field name="NUM">0</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="math_round">\n                <field name="OP">ROUND</field>\n                <value name="NUM">\n                    <shadow type="math_number">\n                        <field name="NUM">3.1</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="math_on_list">\n                <mutation op="SUM" />\n                <field name="OP">SUM</field>\n            </block>\n            <block type="math_modulo">\n                <value name="DIVIDEND">\n                    <shadow type="math_number">\n                        <field name="NUM">64</field>\n                    </shadow>\n                </value>\n                <value name="DIVISOR">\n                    <shadow type="math_number">\n                        <field name="NUM">10</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="math_constrain">\n                <value name="VALUE">\n                    <shadow type="math_number">\n                        <field name="NUM">50</field>\n                    </shadow>\n                </value>\n                <value name="LOW">\n                    <shadow type="math_number">\n                        <field name="NUM">1</field>\n                    </shadow>\n                </value>\n                <value name="HIGH">\n                    <shadow type="math_number">\n                        <field name="NUM">100</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="math_random_int">\n                <value name="FROM">\n                    <shadow type="math_number">\n                        <field name="NUM">1</field>\n                    </shadow>\n                </value>\n                <value name="TO">\n                    <shadow type="math_number">\n                        <field name="NUM">100</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="math_random_float" />\n        </category>\n        <category name="{{ TOOLBOX_TEXT }}" colour="#5ba58c">\n            <block type="text">\n                <field name="TEXT" />\n            </block>\n            <block type="text_join">\n                <mutation items="2" />\n            </block>\n\n            <block type="s4d_replace">\n                <value name="TEXT">\n                    <shadow type="text">\n                        <field name="TEXT">abc</field>\n                    </shadow>\n                </value>\n                <value name="REPLACE">\n                    <shadow type="text">\n                        <field name="TEXT">a</field>\n                    </shadow>\n                </value>\n                <value name="WITH">\n                    <shadow type="text">\n                        <field name="TEXT">b</field>\n                    </shadow>\n                </value>                \n            </block>\n\n            <block type="s4d_newline"></block>\n            <block type="text_append">\n                <field name="VAR" id="X4zy!98/2$-ur;|L{NlX">item</field>\n                <value name="TEXT">\n                    <shadow type="text">\n                        <field name="TEXT" />\n                    </shadow>\n                </value>\n            </block>\n            <block type="text_length">\n                <value name="VALUE">\n                    <shadow type="text">\n                        <field name="TEXT">abc</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="s4d_starts_with">\n                <value name="STRING">\n                    <shadow type="text">\n                        <field name="TEXT">abc</field>\n                    </shadow>\n                </value>\n                <value name="SUBSTRING">\n                    <shadow type="text">\n                        <field name="TEXT">a</field>\n                    </shadow>\n                </value>\n            </block>\n\n            <block type="s4d_includes">\n                <value name="TEXT">\n                    <shadow type="text">\n                        <field name="TEXT">abc</field>\n                    </shadow>\n                </value>\n                <value name="INCLUDES">\n                    <shadow type="text">\n                        <field name="TEXT">a</field>\n                    </shadow>\n                </value>\n            </block>\n\n            <block type="text_isEmpty">\n                <value name="VALUE">\n                    <shadow type="text">\n                        <field name="TEXT" />\n                    </shadow>\n                </value>\n            </block>\n            <block type="text_indexOf">\n                <field name="END">FIRST</field>\n                <value name="VALUE">\n                    <block type="variables_get">\n                        <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>\n                    </block>\n                </value>\n                <value name="FIND">\n                    <shadow type="text">\n                        <field name="TEXT">abc</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="text_charAt">\n                <mutation at="true" />\n                <field name="WHERE">FROM_START</field>\n                <value name="VALUE">\n                    <block type="variables_get">\n                        <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>\n                    </block>\n                </value>\n            </block>\n            <block type="text_getSubstring">\n                <mutation at1="true" at2="true" />\n                <field name="WHERE1">FROM_START</field>\n                <field name="WHERE2">FROM_START</field>\n                <value name="STRING">\n                    <block type="variables_get">\n                        <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>\n                    </block>\n                </value>\n            </block>\n            <block type="text_changeCase">\n                <field name="CASE">UPPERCASE</field>\n                <value name="TEXT">\n                    <shadow type="text">\n                        <field name="TEXT">abc</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="text_trim">\n                <field name="MODE">BOTH</field>\n                <value name="TEXT">\n                    <shadow type="text">\n                        <field name="TEXT">abc</field>\n                    </shadow>\n                </value>\n            </block>\n        </category>\n        <category name="{{ TOOLBOX_LISTS }}" colour="#745ba5">\n            <block type="lists_create_with">\n                <mutation items="0" />\n            </block>\n            <block type="lists_create_with">\n                <mutation items="3" />\n            </block>\n            <block type="lists_repeat">\n                <value name="NUM">\n                    <shadow type="math_number">\n                        <field name="NUM">5</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="lists_length" />\n            <block type="lists_isEmpty" />\n            <block type="lists_indexOf">\n                <field name="END">FIRST</field>\n                <value name="VALUE">\n                    <block type="variables_get">\n                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n                    </block>\n                </value>\n            </block>\n            <block type="lists_getIndex">\n                <mutation statement="false" at="true" />\n                <field name="MODE">GET</field>\n                <field name="WHERE">FROM_START</field>\n                <value name="VALUE">\n                    <block type="variables_get">\n                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n                    </block>\n                </value>\n            </block>\n            <block type="lists_setIndex">\n                <mutation at="true" />\n                <field name="MODE">SET</field>\n                <field name="WHERE">FROM_START</field>\n                <value name="LIST">\n                    <block type="variables_get">\n                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n                    </block>\n                </value>\n            </block>\n            <block type="lists_getSublist">\n                <mutation at1="true" at2="true" />\n                <field name="WHERE1">FROM_START</field>\n                <field name="WHERE2">FROM_START</field>\n                <value name="LIST">\n                    <block type="variables_get">\n                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>\n                    </block>\n                </value>\n            </block>\n            <block type="lists_split">\n                <mutation mode="SPLIT" />\n                <field name="MODE">SPLIT</field>\n                <value name="DELIM">\n                    <shadow type="text">\n                        <field name="TEXT">,</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="lists_sort">\n                <field name="TYPE">NUMERIC</field>\n                <field name="DIRECTION">1</field>\n            </block>\n        </category>\n        <category name="{{ TOOLBOX_COLORS }}" colour="#a5745b">\n            <block type="colour_picker">\n                <field name="COLOUR">#ff0000</field>\n            </block>\n            <block type="colour_random" />\n            <block type="colour_rgb">\n                <value name="RED">\n                    <shadow type="math_number">\n                        <field name="NUM">100</field>\n                    </shadow>\n                </value>\n                <value name="GREEN">\n                    <shadow type="math_number">\n                        <field name="NUM">50</field>\n                    </shadow>\n                </value>\n                <value name="BLUE">\n                    <shadow type="math_number">\n                        <field name="NUM">0</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="colour_blend">\n                <value name="COLOUR1">\n                    <shadow type="colour_picker">\n                        <field name="COLOUR">#ff0000</field>\n                    </shadow>\n                </value>\n                <value name="COLOUR2">\n                    <shadow type="colour_picker">\n                        <field name="COLOUR">#3333ff</field>\n                    </shadow>\n                </value>\n                <value name="RATIO">\n                    <shadow type="math_number">\n                        <field name="NUM">0.5</field>\n                    </shadow>\n                </value>\n            </block>\n        </category>\n        <sep />\n        <category name="{{ TOOLBOX_VARIABLES }}" colour="#a55b80" custom="VARIABLE" />\n        <category name="{{ TOOLBOX_FUNCTIONS }}" colour="#995ba5" custom="PROCEDURE" />\n        <category name="{{ TOOLBOX_OTHER }}" colour="#D14081">\n            <block type="s4d_current"></block>\n            <block type="s4d_run_save_output"></block>\n            <block type="s4d_wait_seconds">\n                <value name="TIME">\n                    <shadow type="math_number">\n                        <field name="NUM">2</field>\n                    </shadow>\n                </value>\n            </block>\n        </category>\n        <sep />\n        <category name="{{ TOOLBOX_BASE }}" colour="#F46580">\n        <label text="%{BKY_MANDATORY_BLOCKS}" web-class="boldtext"></label>\n            <block type="s4d_login">\n                <value name="TOKEN">\n                    <block type="text">\n                        <field name="TEXT">Your bot token</field>\n                    </block>\n                </value>\n            </block>\n            <label text="%{BKY_BASE_BLOCKS}"></label>\n            <block type="s4d_on_connected"></block>\n            <label text="%{BKY_BOT_INFORMATIONS}"></label>\n            <block type="s4d_bot_ping"></block>\n            <block type="s4d_bot_server_count"></block>\n            <label text="%{BKY_BOT_ACTIONS}"></label>\n            <block type="s4d_set_bot_game"></block>\n        </category>\n        <category name="{{ TOOLBOX_E_MESSAGES }}" colour="#41AAC0">\n            <label text="%{BKY_MESSAGE_RELATED_BLOCKS}" web-class="boldtext"></label>\n            <label text="%{BKY_DETECT_MESSAGES}"></label>\n            <block type="s4d_on_message"></block>\n            <label text="%{BKY_MESSAGE_INFORMATIONS}"></label>\n            <block type="s4d_message_content"></block>\n            <block type="s4d_message_id"></block>\n            <block type="s4d_message_author"></block>\n            <block type="s4d_mentioned_member"></block>\n            <label text="%{BKY_LABEL_MESSAGE_CONTEXT}"></label>\n            <block type="s4d_message_channel"></block>\n            <block type="s4d_message_guild"></block>\n            <label text="%{BKY_RELATED_TO_MESSAGE_STRINGS}"></label>\n            <block type="s4d_message_author_raw"></block>\n            <block type="s4d_message_channel_raw"></block>\n            <block type="s4d_message_guild_raw"></block>\n            <label text="%{BKY_MESSAGE_ACTIONS}"></label>\n            <block type="s4d_reply">\n                <value name="CONTENT">\n                    <shadow type="text">\n                        <field name="TEXT">{{ REPLY_EXAMPLE }}</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="s4d_delete"></block>\n            <block type="s4d_add_reaction">\n                <value name="REACTION">\n                    <shadow type="text">\n                        <field name="TEXT">👍</field>\n                    </shadow>\n                </value>\n            </block>\n            <label text="%{BKY_TOOLS}"></label>\n            <block type="s4d_message_embed"></block>\n        </category>\n        <category name="{{ TOOLBOX_E_JOINS }}" colour="#EABB11">\n            <label text="%{BKY_JOINS_RELATED_BLOCKS}" web-class="boldtext"></label>\n            <label text="%{BKY_DETECT_JOINS}"></label>\n            <block type="s4d_on_member_join"></block>\n            <label text="%{BKY_JOINING_MEMBER_INFORMATIONS}"></label>\n            <block type="s4d_joining_member"></block>\n            <block type="s4d_joining_guild"></block>\n            <label text="%{BKY_RELATED_TO_JOIN_STRINGS}"></label>\n            <block type="s4d_joining_member_raw"></block>\n            <block type="s4d_joining_guild_raw"></block>\n        </category>\n        <category name="{{ TOOLBOX_E_LEAVES }}" colour="#778899">\n            <label text="%{BKY_LEAVES_RELATED_BLOCKS}" web-class="boldtext"></label>\n            <label text="%{BKY_DETECT_LEAVES}"></label>\n            <block type="s4d_on_member_leave"></block>\n            <label text="%{BKY_LEAVING_MEMBER_INFORMATIONS}"></label>\n            <block type="s4d_leaving_guild"></block>\n            <label text="%{BKY_RELATED_TO_LEAVE_STRINGS}"></label>\n            <block type="s4d_leaving_member_raw"></block>\n            <block type="s4d_leaving_guild_raw"></block>\n        </category>\n        <category name="{{ TOOLBOX_E_REACTIONS }}" colour="#89674A">\n            <label text="%{BKY_REACT_RELATED_BLOCKS}" web-class="boldtext"></label>\n            <label text="%{BKY_DETECT_REACT}"></label>\n            <block type="s4d_on_react_added"></block>\n            <block type="s4d_on_react_removed"></block>\n            <label text="%{BKY_REACT_INFORMATIONS}"></label>\n            <block type="s4d_react_message_id"></block>\n            <block type="s4d_react_emoji"></block>\n            <block type="s4d_react_member"></block>\n        </category>\n        <sep />\n        <category name="{{ TOOLBOX_SERVER }}" colour="#D85E47">\n            <label text="%{BKY_FIND_SERVER}"></label>\n            <block type="s4d_get_server"></block>\n            <label text="%{BKY_LABEL_SERVER_INFOS}"></label>\n            <block type="s4d_server_name"></block>\n            <block type="s4d_member_count"></block>\n            <block type="s4d_icon_url"></block>\n            <block type="s4d_boost_level"></block>\n            <block type="s4d_server_owner"></block>\n            <label text="%{BKY_LABEL_MODIFY_SERVER}"></label>\n            <block type="s4d_set_server_name"></block>\n        </category>\n        <category name="{{ TOOLBOX_CHANNELS }}" colour="#a55b80">\n            <label text="%{BKY_FIND_CHANNEL}"></label>\n            <block type="s4d_get_channel"></block>\n            <label text="%{BKY_SEND_CHANNEL_LABEL}"></label>\n            <block type="s4d_send_channel"></block>\n            <label text="%{BKY_FORMS}"></label>\n            <block type="s4d_send_wait_reply">\n                <value name="CONTENT">\n                    <shadow type="text">\n                        <field name="TEXT">{{ SEND_WAIT_REPLY_EXAMPLE }}</field>\n                    </shadow>\n                </value>\n                <value name="TIME">\n                    <shadow type="math_number">\n                        <field name="NUM">5</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="s4d_send_wait_reply_value"></block>\n\n            <label text="%{BKY_CHANNEL_MESSAGE_ACTIONS}"></label>\n             <block type="s4d_purge">\n                <value name="AMOUNT">\n                    <shadow type="math_number">\n                        <field name="NUM">2</field>\n                    </shadow>\n                </value> \n            </block>\n\n            <label text="%{BKY_CHANNEL_ACTIONS}"></label>\n            <block type="s4d_create_channel"></block>\n        </category>\n        <category name="{{ TOOLBOX_ROLES }}" colour="#2EB66B">\n            <label text="%{BKY_FIND_ROLE}"></label>\n            <block type="s4d_get_role"></block>\n            <label text="%{BKY_ROLE_ASSIGNMENT}"></label>\n            <block type="s4d_add_role"></block>\n            <block type="s4d_remove_role"></block>\n        </category>\n        <category name="{{ TOOLBOX_MEMBERS }}" colour="#187795">\n            <label text="%{BKY_FIND_MEMBER}"></label>\n            <block type="s4d_get_member"></block>\n            <label text="%{BKY_MEMBER_INFORMATIONS}"></label>\n            <block type="s4d_member_id"></block>\n            <block type="s4d_member_discriminator"></block>\n            <block type="s4d_member_tag"></block>\n            <block type="s4d_member_username"></block>\n            <block type="s4d_member_has_permission"></block>\n            <block type="s4d_member_is_bot"></block>\n            <label text="%{BKY_LABEL_MEMBER_ACTIONS}"></label>\n            <block type="s4d_kick_member"></block>\n            <block type="s4d_ban_member"></block>\n\n            <block type="s4d_send_member"></block>\n\n            <block type="s4d_set_member_nickname"></block>\n        </category>\n        <sep />\n        <category name="{{ TOOLBOX_DATABASE }}" colour="#FF0000">\n            <label text="%{BKY_LABEL_READ_DB}"></label>\n            <block type="s4d_get_data">\n                <value name="KEY">\n                    <shadow type="text">\n                        <field name="TEXT">hello</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="s4d_has_data">\n                <value name="KEY">\n                    <shadow type="text">\n                        <field name="TEXT">hello</field>\n                    </shadow>\n                </value>\n            </block>\n            <label text="%{BKY_LABEL_UPDATE_DB}"></label>\n            <block type="s4d_set_data">\n                <value name="KEY">\n                    <shadow type="text">\n                        <field name="TEXT">hello</field>\n                    </shadow>\n                </value>\n                <value name="VALUE">\n                    <shadow type="text">\n                        <field name="TEXT">world</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="s4d_delete_data">\n                <value name="KEY">\n                    <shadow type="text">\n                        <field name="TEXT">hello</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="s4d_add_data">\n                <value name="COUNT">\n                    <shadow type="math_number">\n                        <field name="NUM">1</field>\n                    </shadow>\n                </value>\n                <value name="KEY">\n                    <shadow type="text">\n                        <field name="TEXT">points</field>\n                    </shadow>\n                </value>\n            </block>\n            <block type="s4d_subtract_data">\n                <value name="COUNT">\n                    <shadow type="math_number">\n                        <field name="NUM">1</field>\n                    </shadow>\n                </value>\n                <value name="KEY">\n                    <shadow type="text">\n                        <field name="TEXT">points</field>\n                    </shadow>\n                </value>\n            </block>\n        </category>\n    </xml>\n'.replace(
                    /{{\s([A-z]{3,})\s}}/g,
                    function (t) {
                        return e.Msg[t.replace("{{ ", "").replace(" }}", "")];
                    }
                );
            },
            Me = {
                name: "BlocklyComponent",
                props: ["options"],
                data: function () {
                    return { toastLogin: !1, workspace: this.$store.state.workspace };
                },
                mounted: function () {
                    var e = this;
                    this.setLanguage(this.$store.state.blocklyLocale);
                    var t = this.$props.options || {};
                    t.toolbox = this.$refs["blocklyToolbox"];
                    var n = c.a.inject(this.$refs["blocklyDiv"], Object(Ee["a"])(Object(Ee["a"])({}, t), { toolbox: Ae(c.a) }));
                    this.$store.commit("setWorkspace", { workspace: n }),
                        n.addChangeListener(c.a.Events.disableOrphans),
                        this.$nextTick(function () {
                            window.setInterval(function () {
                                pe(e.$store.state.workspace);
                                var t = e.$store.state.workspace.getAllBlocks().some(function (e) {
                                    return "s4d_login" === e.type;
                                });
                                t ? e.toastLogin && ((e.toastLogin = !1), e.$toast.clear()) : e.toastLogin || ((e.toastLogin = !0), e.$toast.open({ message: e.$t("warnings.login_block"), type: "warning", dismissible: !1, duration: 1e9 }));
                            }, 100);
                        });
                }
            },
            Te = Me,
            Ne = (n("7ec4"), Object(R["a"])(Te, le, ce, !1, null, "180ad633", null)),
            Oe = Ne.exports,
            ge = n("b7fd"),
            fe = n.n(ge),
            Ie = "s4d_bot_ping",
            he = { message0: "%{BKY_BOT_PING}", colour: "#5b67a5", tooltip: "", output: "Number", helpUrl: "" };
        (ge["Blocks"][Ie] = {
            init: function () {
                this.jsonInit(he);
            }
        }),
            (ge["JavaScript"][Ie] = function () {
                var e = ["s4d.client.ws.ping", ge["JavaScript"].ORDER_NONE];
                return e;
            });
        var ye = "s4d_bot_server_count",
            Be = { message0: "%{BKY_BOT_SERVER_COUNT}", colour: "#5b67a5", tooltip: "", output: "Number", helpUrl: "" };
        (ge["Blocks"][ye] = {
            init: function () {
                this.jsonInit(Be);
            }
        }),
            (ge["JavaScript"][ye] = function () {
                var e = ["s4d.client.guilds.cache.size", ge["JavaScript"].ORDER_NONE];
                return e;
            });
        var ke = "s4d_login",
            Ce = { type: "block_type", message0: "%{BKY_LOGIN}", args0: [{ type: "input_value", name: "TOKEN", check: "String" }], colour: "#F46580", tooltip: "%{BKY_LOGIN_TOOLTIP}", helpUrl: "" };
        (ge["Blocks"][ke] = {
            init: function () {
                this.jsonInit(Ce);
            }
        }),
            (ge["JavaScript"][ke] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "TOKEN", ge["JavaScript"].ORDER_ATOMIC),
                    n = "s4d.client.login(".concat(t, ").catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });\n");
                return n;
            });
        var De = "s4d_on_connected",
            Le = { message0: "%{BKY_ON_CONNECTED} %1 %2", colour: "#F5AB1A", args0: [{ type: "input_dummy" }, { type: "input_statement", name: "STATEMENTS" }], tooltip: "%{BKY_ON_CONNECTED_TOOLTIP}" };
        (fe.a.Blocks[De] = {
            init: function () {
                this.jsonInit(Le);
            }
        }),
            (fe.a.JavaScript[De] = function (e) {
                var t = fe.a.JavaScript.statementToCode(e, "STATEMENTS"),
                    n = "s4d.client.on('ready', async () => {\n".concat(t, "\n});\n");
                return n;
            });
        var Ue = "s4d_set_bot_game",
            Ge = { message0: "%{BKY_SET_BOT_GAME}", args0: [{ type: "input_value", name: "GAME", check: ["Number", "String"] }], colour: "#4C97FF", previousStatement: null, nextStatement: null, tooltip: "", helpUrl: "" };
        (ge["Blocks"][Ue] = {
            init: function () {
                this.jsonInit(Ge);
            }
        }),
            (ge["JavaScript"][Ue] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "GAME", ge["JavaScript"].ORDER_ATOMIC),
                    n = "s4d.client.user.setActivity(String(".concat(t, "));\n");
                return n;
            }),
            ue(Ue, [{ type: "notempty", message: "RES_MISSING_GAME", types: ["GAME"] }]);
        var we = "s4d_add_reaction",
            Ve = { message0: "%{BKY_ADD_REACTION}", args0: [{ type: "input_value", name: "REACTION", check: "String" }], previousStatement: null, nextStatement: null, colour: "#4C97FF", tooltip: "", helpUrl: "" };
        (fe.a.Blocks[we] = {
            init: function () {
                this.jsonInit(Ve);
            }
        }),
            (fe.a.JavaScript[we] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "REACTION", fe.a.JavaScript.ORDER_ATOMIC),
                    n = "s4dmessage.react(".concat(t, ");");
                return n;
            }),
            ue(we, [{ type: "notempty", message: "RES_ADD_REACTION_MISSING_REACTION", types: ["REACTION"] }]);
        var xe = "s4d_delete",
            Pe = { message0: "%{BKY_DELETE_MESSAGE}", colour: "#4C97FF", previousStatement: null, nextStatement: null, tooltip: "", helpUrl: "" };
        (ge["Blocks"][xe] = {
            init: function () {
                this.jsonInit(Pe);
            }
        }),
            (ge["JavaScript"][xe] = function () {
                var e = "s4dmessage.delete();\n";
                return e;
            }),
            ue(xe, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MESSAGE", types: ["s4d_on_message"] }]);
        var Je = "s4d_mentioned_member",
            Ye = { message0: "%{BKY_MENTIONED_MEMBER}", colour: "#187795", tooltip: "", output: "Member", helpUrl: "" };
        (fe.a.Blocks[Je] = {
            init: function () {
                this.jsonInit(Ye);
            }
        }),
            (fe.a.JavaScript[Je] = function () {
                var e = ["s4dmessage.mentions.members.first()", fe.a.JavaScript.ORDER_NONE];
                return e;
            }),
            ue(Je, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MESSAGE", types: ["s4d_on_message"] }]);
        var Ke = "s4d_message_id",
            je = { message0: "%{BKY_MESSAGE_ID}", colour: "#5BA58C", tooltip: "", output: "String", helpUrl: "" };
        (ge["Blocks"][Ke] = {
            init: function () {
                this.jsonInit(je);
            }
        }),
            (ge["JavaScript"][Ke] = function () {
                var e = ["s4dmessage.id", ge["JavaScript"].ORDER_NONE];
                return e;
            }),
            ue(Ke, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MESSAGE", types: ["s4d_on_message"] }]);
        var He = "s4d_message_author",
            Xe = { message0: "%{BKY_MESSAGE_AUTHOR}", colour: "#187795", output: "Member", tooltip: "", helpUrl: "" };
        (fe.a.Blocks[He] = {
            init: function () {
                this.jsonInit(Xe);
            }
        }),
            (fe.a.JavaScript[He] = function () {
                var e = ["s4dmessage.member", fe.a.JavaScript.ORDER_NONE];
                return e;
            }),
            ue(He, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MESSAGE", types: ["s4d_on_message"] }]);
        var Fe = "s4d_message_author_raw",
            We = {
                message0: "%{BKY_MESSAGE_AUTHOR_RAW}",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "SEARCH_TYPE",
                        options: [
                            ["%{BKY_USERNAME}", "USERNAME"],
                            ["%{BKY_NICKNAME}", "NICKNAME"],
                            ["id", "ID"]
                        ]
                    }
                ],
                output: "String",
                colour: "#5BA58C",
                tooltip: "",
                helpUrl: ""
            };
        (l["Blocks"][Fe] = {
            init: function () {
                this.jsonInit(We);
            }
        }),
            (l["JavaScript"][Fe] = function (e) {
                var t = e.getFieldValue("SEARCH_TYPE");
                if ("ID" === t) {
                    var n = ["s4dmessage.author.id", l["JavaScript"].ORDER_NONE];
                    return n;
                }
                if ("USERNAME" === t) {
                    var a = ["s4dmessage.author.username", l["JavaScript"].ORDER_NONE];
                    return a;
                }
                if ("NICKNAME" === t) {
                    var o = ["(s4dmessage.member || await s4dmessage.guild.members.fetch(s4dmessage.author.id)).nickname", l["JavaScript"].ORDER_NONE];
                    return o;
                }
            }),
            ue(Fe, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MESSAGE", types: ["s4d_on_message"] }]);
        var $e = "s4d_message_channel",
            ze = { message0: "%{BKY_MESSAGE_CHANNEL}", colour: "#a55b80", output: "Channel", tooltip: "", helpUrl: "" };
        (fe.a.Blocks[$e] = {
            init: function () {
                this.jsonInit(ze);
            }
        }),
            (fe.a.JavaScript[$e] = function () {
                var e = ["s4dmessage.channel", fe.a.JavaScript.ORDER_NONE];
                return e;
            }),
            ue($e, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MESSAGE", types: ["s4d_on_message"] }]);
        var qe = "s4d_message_channel_raw",
            Qe = {
                message0: "%{BKY_MESSAGE_CHANNEL_RAW}",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "SEARCH_TYPE",
                        options: [
                            ["%{BKY_NAME}", "NAME"],
                            ["id", "ID"]
                        ]
                    }
                ],
                output: "String",
                colour: "#5BA58C",
                tooltip: "",
                helpUrl: ""
            };
        (fe.a.Blocks[qe] = {
            init: function () {
                this.jsonInit(Qe);
            }
        }),
            (fe.a.JavaScript[qe] = function (e) {
                var t = e.getFieldValue("SEARCH_TYPE");
                if ("ID" === t) {
                    var n = ["(s4dmessage.channel || {}).id", fe.a.JavaScript.ORDER_NONE];
                    return n;
                }
                if ("NAME" === t) {
                    var a = ["(s4dmessage.channel || {}).name", fe.a.JavaScript.ORDER_NONE];
                    return a;
                }
            }),
            ue(qe, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MESSAGE", types: ["s4d_on_message"] }]);
        var Ze = "s4d_message_content",
            et = { message0: "%{BKY_MESSAGE_CONTENT}", colour: "#5BA58C", tooltip: "", output: "String", helpUrl: "" };
        (ge["Blocks"][Ze] = {
            init: function () {
                this.jsonInit(et);
            }
        }),
            (ge["JavaScript"][Ze] = function () {
                var e = ["s4dmessage.content", ge["JavaScript"].ORDER_NONE];
                return e;
            }),
            ue(Ze, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MESSAGE", types: ["s4d_on_message"] }]);
        var tt = ["MESSAGE", "COLOR", "TITLE", "IMAGE", "FOOTER", "THUMBNAIL"],
            nt = ["String", "Colour", "String", "String", "String", "String"],
            at = { message0: "%{BKY_MESSAGE_EMBED}", mutator: "s4d_message_embed_mutator", output: "MessageEmbed", helpUrl: "", tooltip: "", colour: "#40BF4A" };
        (fe.a.Blocks["s4d_message_embed"] = {
            init: function () {
                this.jsonInit(at);
            }
        }),
            (fe.a.Blocks["s4d_message_embed_mutator"] = {
                init: function () {
                    this.setColour("#CECDCE"), this.setTooltip(""), this.setHelpUrl("");
                }
            });
        var ot = {
            inputs_: [!0, !1, !1, !1, !1, !1],
            mutationToDom: function () {
                if (!this.inputs_) return null;
                for (var e = document.createElement("mutation"), t = 0; t < this.inputs_.length; t++) this.inputs_[t] && e.setAttribute(tt[t], this.inputs_[t]);
                return e;
            },
            domToMutation: function (e) {
                for (var t = 0; t < this.inputs_.length; t++) this.inputs_[t] = "true" == e.getAttribute(tt[t].toLowerCase());
                this.updateShape_();
            },
            decompose: function (e) {
                for (var t = e.newBlock("s4d_message_embed_mutator"), n = 0; n < this.inputs_.length; n++)
                    t.appendDummyInput()
                        .setAlign(fe.a.ALIGN_RIGHT)
                        .appendField(c.a.Msg[tt[n]])
                        .appendField(new fe.a.FieldCheckbox(this.inputs_[n] ? "TRUE" : "FALSE"), tt[n].toUpperCase());
                return t.initSvg(), t;
            },
            compose: function (e) {
                for (var t = 0; t < this.inputs_.length; t++) this.inputs_[t] = "TRUE" == e.getFieldValue(tt[t].toUpperCase());
                this.updateShape_();
            },
            updateShape_: function () {
                for (var e = 0; e < this.inputs_.length; e++) this.getInput(tt[e].toUpperCase()) && this.removeInput(tt[e].toUpperCase());
                for (var t = 0; t < this.inputs_.length; t++) this.inputs_[t] && this.appendValueInput(tt[t].toUpperCase()).setCheck(nt[t]).setAlign(fe.a.ALIGN_RIGHT).appendField(c.a.Msg[tt[t]]);
            }
        };
        fe.a.Extensions.registerMutator("s4d_message_embed_mutator", ot, null, [""]),
            (fe.a.JavaScript["s4d_message_embed"] = function (e) {
                return [
                    "\n        {\n            embed: {\n                title: "
                        .concat(fe.a.JavaScript.valueToCode(e, "TITLE", fe.a.JavaScript.ORDER_ATOMIC) || null, ",\n                color: ")
                        .concat(fe.a.JavaScript.valueToCode(e, "COLOR", fe.a.JavaScript.ORDER_ATOMIC) || null, ",\n                image: { url: ")
                        .concat(fe.a.JavaScript.valueToCode(e, "IMAGE", fe.a.JavaScript.ORDER_ATOMIC) || null, " }, \n\n                description: ")
                        .concat(fe.a.JavaScript.valueToCode(e, "MESSAGE", fe.a.JavaScript.ORDER_ATOMIC) || null, ",\n                footer: { text: ")
                        .concat(fe.a.JavaScript.valueToCode(e, "FOOTER", fe.a.JavaScript.ORDER_ATOMIC) || null, " },\n                thumbnail: { url: ")
                        .concat(fe.a.JavaScript.valueToCode(e, "THUMBNAIL", fe.a.JavaScript.ORDER_ATOMIC) || null, " }\n\n            }\n        }\n    "),
                    fe.a.JavaScript.ORDER_ATOMIC
                ];
            });
        var rt = "s4d_message_guild",
            st = { message0: "%{BKY_MESSAGE_GUILD}", colour: "#D85E47", output: "Server", tooltip: "", helpUrl: "" };
        (fe.a.Blocks[rt] = {
            init: function () {
                this.jsonInit(st);
            }
        }),
            (fe.a.JavaScript[rt] = function () {
                var e = ["s4dmessage.guild", fe.a.JavaScript.ORDER_NONE];
                return e;
            }),
            ue(rt, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MESSAGE", types: ["s4d_on_message"] }]);
        var it = "s4d_message_guild_raw",
            lt = {
                message0: "%{BKY_MESSAGE_GUILD_RAW}",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "SEARCH_TYPE",
                        options: [
                            ["%{BKY_NAME}", "NAME"],
                            ["id", "ID"]
                        ]
                    }
                ],
                output: "String",
                colour: "#5BA58C",
                tooltip: "",
                helpUrl: ""
            };
        (l["Blocks"][it] = {
            init: function () {
                this.jsonInit(lt);
            }
        }),
            (l["JavaScript"][it] = function (e) {
                var t = e.getFieldValue("SEARCH_TYPE");
                if ("ID" === t) {
                    var n = ["(s4dmessage.guild || {}).id", l["JavaScript"].ORDER_NONE];
                    return n;
                }
                if ("NAME" === t) {
                    var a = ["(s4dmessage.guild || {}).name", l["JavaScript"].ORDER_NONE];
                    return a;
                }
            }),
            ue(it, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MESSAGE", types: ["s4d_on_message"] }]);
        var ct = "s4d_on_message",
            Et = { message0: "%{BKY_ON_MESSAGE} %1 %2", colour: "#F5AB1A", args0: [{ type: "input_dummy" }, { type: "input_statement", name: "STATEMENTS" }] };
        (l["Blocks"][ct] = {
            init: function () {
                this.jsonInit(Et);
            }
        }),
            (l["JavaScript"][ct] = function (e) {
                var t = l["JavaScript"].statementToCode(e, "STATEMENTS"),
                    n = "s4d.client.on('message', async (s4dmessage) => {\n".concat(t, "\n});\n");
                return n;
            });
        var _t = "s4d_reply",
            dt = { message0: "%{BKY_REPLY}", args0: [{ type: "input_value", name: "CONTENT", check: ["Number", "String", "MessageEmbed"] }], colour: "#4C97FF", previousStatement: null, nextStatement: null, tooltip: "", helpUrl: "" };
        (ge["Blocks"][_t] = {
            init: function () {
                this.jsonInit(dt);
            }
        }),
            (ge["JavaScript"][_t] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "CONTENT", ge["JavaScript"].ORDER_ATOMIC);
                if (e.getInput("CONTENT").connection.targetConnection) {
                    var n = e.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ? e.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
                    if ("MessageEmbed" === n || (!n && "object" === Object(J["a"])(n))) {
                        var a = "s4dmessage.channel.send(".concat(t, ");\n");
                        return a;
                    }
                    var o = "s4dmessage.channel.send(String(".concat(t, "));\n");
                    return o;
                }
                var r = "s4dmessage.channel.send(String(".concat(t, "));\n");
                return r;
            }),
            ue(_t, [
                { type: "notempty", message: "RES_MISSING_CONTENT", types: ["CONTENT"] },
                { type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MESSAGE", types: ["s4d_on_message"] }
            ]);
        var ut = "s4d_purge",
            mt = {
                message0: "%{BKY_PURGE}",
                args0: [
                    { type: "input_value", name: "CHANNEL", check: "Channel" },
                    { type: "input_value", name: "AMOUNT", check: "Number" }
                ],
                previousStatement: null,
                nextStatement: null,
                inputsInline: !0,
                colour: "#1a75ff",
                tooltip: "",
                helpUrl: ""
            };
        (fe.a.Blocks[ut] = {
            init: function () {
                this.jsonInit(mt);
            }
        }),
            (fe.a.JavaScript[ut] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "CHANNEL", fe.a.JavaScript.ORDER_ATOMIC),
                    n = fe.a.JavaScript.valueToCode(e, "AMOUNT", fe.a.JavaScript.ORDER_ATOMIC),
                    a = "".concat(t, ".bulkDelete((").concat(n, "|1))");
                return a;
            }),
            ue(ut, [
                { type: "notempty", message: "RES_PURGE_CHANNEL", types: ["CHANNEL"] },
                { type: "notempty", message: "RES_PURGE_AMOUNT", types: ["AMOUNT"] }
            ]);
        var pt = "s4d_joining_guild",
            St = { message0: "%{BKY_JOINING_GUILD}", colour: "#D85E47", output: "Server", tooltip: "", helpUrl: "" };
        (fe.a.Blocks[pt] = {
            init: function () {
                this.jsonInit(St);
            }
        }),
            (fe.a.JavaScript[pt] = function () {
                var e = ["s4d.joiningMember.guild", fe.a.JavaScript.ORDER_NONE];
                return e;
            }),
            ue(pt, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MEMBER_JOIN", types: ["s4d_on_member_join"] }]);
        var vt = "s4d_joining_guild_raw",
            Rt = {
                message0: "%{BKY_JOINING_GUILD_RAW}",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "SEARCH_TYPE",
                        options: [
                            ["%{BKY_NAME}", "NAME"],
                            ["id", "ID"]
                        ]
                    }
                ],
                output: "String",
                colour: "#5BA58C",
                tooltip: "",
                helpUrl: ""
            };
        (l["Blocks"][vt] = {
            init: function () {
                this.jsonInit(Rt);
            }
        }),
            (l["JavaScript"][vt] = function (e) {
                var t = e.getFieldValue("SEARCH_TYPE");
                if ("ID" === t) {
                    var n = ["s4d.joiningMember.guild.id", l["JavaScript"].ORDER_NONE];
                    return n;
                }
                if ("NAME" === t) {
                    var a = ["s4d.joiningMember.guild.name", l["JavaScript"].ORDER_NONE];
                    return a;
                }
            }),
            ue(vt, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MEMBER_JOIN", types: ["s4d_on_member_join"] }]);
        var bt = "s4d_joining_member",
            At = { message0: "%{BKY_JOINING_MEMBER}", colour: "#187795", output: "Member", tooltip: "", helpUrl: "" };
        (fe.a.Blocks[bt] = {
            init: function () {
                this.jsonInit(At);
            }
        }),
            (fe.a.JavaScript[bt] = function () {
                var e = ["s4d.joiningMember", fe.a.JavaScript.ORDER_NONE];
                return e;
            }),
            ue(bt, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MEMBER_JOIN", types: ["s4d_on_member_join"] }]);
        var Mt = "s4d_joining_member_raw",
            Tt = {
                message0: "%{BKY_JOINING_MEMBER_RAW}",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "SEARCH_TYPE",
                        options: [
                            ["%{BKY_USERNAME}", "USERNAME"],
                            ["%{BKY_NICKNAME}", "NICKNAME"],
                            ["id", "ID"]
                        ]
                    }
                ],
                output: "String",
                colour: "#5BA58C",
                tooltip: "",
                helpUrl: ""
            };
        (l["Blocks"][Mt] = {
            init: function () {
                this.jsonInit(Tt);
            }
        }),
            (l["JavaScript"][Mt] = function (e) {
                var t = e.getFieldValue("SEARCH_TYPE");
                if ("ID" === t) {
                    var n = ["s4d.joiningMember.id", l["JavaScript"].ORDER_NONE];
                    return n;
                }
                if ("USERNAME" === t) {
                    var a = ["s4d.joiningMember.user.username", l["JavaScript"].ORDER_NONE];
                    return a;
                }
                if ("NICKNAME" === t) {
                    var o = ["s4d.joiningMember.nickname", l["JavaScript"].ORDER_NONE];
                    return o;
                }
            }),
            ue(Mt, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MEMBER_JOIN", types: ["s4d_on_member_join"] }]);
        var Nt = "s4d_on_member_join",
            Ot = { message0: "%{BKY_ON_MEMBER_JOIN} %1 %2", colour: "#F5AB1A", args0: [{ type: "input_dummy" }, { type: "input_statement", name: "STATEMENTS" }] };
        (ge["Blocks"][Nt] = {
            init: function () {
                this.jsonInit(Ot);
            }
        }),
            (ge["JavaScript"][Nt] = function (e) {
                var t = ge["JavaScript"].statementToCode(e, "STATEMENTS"),
                    n = "s4d.client.on('guildMemberAdd', async (param1) => {\ns4d.joiningMember = param1;\n".concat(t, "s4d.joiningMember = null\n});\n");
                return n;
            });
        var gt = "s4d_leaving_guild",
            ft = { message0: "%{BKY_LEAVING_GUILD}", colour: "#D85E47", output: "Server", tooltip: "", helpUrl: "" };
        (fe.a.Blocks[gt] = {
            init: function () {
                this.jsonInit(ft);
            }
        }),
            (fe.a.JavaScript[gt] = function () {
                var e = ["s4d.leavingMember.guild", fe.a.JavaScript.ORDER_NONE];
                return e;
            }),
            ue(gt, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MEMBER_LEAVE", types: ["s4d_on_member_leave"] }]);
        var It = "s4d_leaving_guild_raw",
            ht = {
                message0: "%{BKY_LEAVING_GUILD_RAW}",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "SEARCH_TYPE",
                        options: [
                            ["%{BKY_NAME}", "NAME"],
                            ["id", "ID"]
                        ]
                    }
                ],
                output: "String",
                colour: "#5BA58C",
                tooltip: "",
                helpUrl: ""
            };
        (l["Blocks"][It] = {
            init: function () {
                this.jsonInit(ht);
            }
        }),
            (l["JavaScript"][It] = function (e) {
                var t = e.getFieldValue("SEARCH_TYPE");
                if ("ID" === t) {
                    var n = ["s4d.leavingMember.guild.id", l["JavaScript"].ORDER_NONE];
                    return n;
                }
                if ("NAME" === t) {
                    var a = ["s4d.leavingMember.guild.name", l["JavaScript"].ORDER_NONE];
                    return a;
                }
            }),
            ue(It, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MEMBER_LEAVE", types: ["s4d_on_member_leave"] }]);
        var yt = "s4d_leaving_member_raw",
            Bt = {
                message0: "%{BKY_LEAVING_MEMBER_RAW}",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "SEARCH_TYPE",
                        options: [
                            ["%{BKY_USERNAME}", "USERNAME"],
                            ["%{BKY_NICKNAME}", "NICKNAME"],
                            ["id", "ID"]
                        ]
                    }
                ],
                output: "String",
                colour: "#5BA58C",
                tooltip: "",
                helpUrl: ""
            };
        (l["Blocks"][yt] = {
            init: function () {
                this.jsonInit(Bt);
            }
        }),
            (l["JavaScript"][yt] = function (e) {
                var t = e.getFieldValue("SEARCH_TYPE");
                if ("ID" === t) {
                    var n = ["s4d.leavingMember.id", l["JavaScript"].ORDER_NONE];
                    return n;
                }
                if ("USERNAME" === t) {
                    var a = ["s4d.leavingMember.user.username", l["JavaScript"].ORDER_NONE];
                    return a;
                }
                if ("NICKNAME" === t) {
                    var o = ["s4d.leavingMember.nickname", l["JavaScript"].ORDER_NONE];
                    return o;
                }
            }),
            ue(yt, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_MEMBER_LEAVE", types: ["s4d_on_member_leave"] }]);
        var kt = "s4d_on_member_leave",
            Ct = { message0: "%{BKY_ON_MEMBER_LEAVE} %1 %2", colour: "#F5AB1A", args0: [{ type: "input_dummy" }, { type: "input_statement", name: "STATEMENTS" }] };
        (ge["Blocks"][kt] = {
            init: function () {
                this.jsonInit(Ct);
            }
        }),
            (ge["JavaScript"][kt] = function (e) {
                var t = ge["JavaScript"].statementToCode(e, "STATEMENTS"),
                    n = "s4d.client.on('guildMemberRemove', async (param1) => {\ns4d.leavingMember = param1;\n".concat(t, "s4d.leavingMember = null\n});\n");
                return n;
            });
        var Dt = "s4d_on_react_added",
            Lt = { message0: "%{BKY_ON_REACT_ADDED} %1 %2", colour: "#F5AB1A", args0: [{ type: "input_dummy" }, { type: "input_statement", name: "STATEMENTS" }] };
        (l["Blocks"][Dt] = {
            init: function () {
                this.jsonInit(Lt);
            }
        }),
            (l["JavaScript"][Dt] = function (e) {
                var t = l["JavaScript"].statementToCode(e, "STATEMENTS"),
                    n = "s4d.client.on('MESSAGE_REACTION_ADD', async (rGuild, rChannel, rMessage, rMember, rEmoji) => {\n".concat(t, "\n});\n");
                return n;
            });
        var Ut = "s4d_on_react_removed",
            Gt = { message0: "%{BKY_ON_REACT_REMOVED} %1 %2", colour: "#F5AB1A", args0: [{ type: "input_dummy" }, { type: "input_statement", name: "STATEMENTS" }] };
        (l["Blocks"][Ut] = {
            init: function () {
                this.jsonInit(Gt);
            }
        }),
            (l["JavaScript"][Ut] = function (e) {
                var t = l["JavaScript"].statementToCode(e, "STATEMENTS"),
                    n = "s4d.client.on('MESSAGE_REACTION_REMOVED', async (rGuild, rChannel, rMessage, rMember, rEmoji) => {\n".concat(t, "\n});\n");
                return n;
            });
        var wt = "s4d_react_emoji",
            Vt = { message0: "%{BKY_REACT_EMOJI}", colour: "#5BA58C", output: "String" };
        (l["Blocks"][wt] = {
            init: function () {
                this.jsonInit(Vt);
            }
        }),
            (l["JavaScript"][wt] = function () {
                var e = ["rEmoji", l["JavaScript"].ORDER_NONE];
                return e;
            }),
            ue(wt, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_REACT", types: ["s4d_on_react_added", "s4d_on_react_removed"] }]);
        var xt = "s4d_react_member",
            Pt = { message0: "%{BKY_REACT_MEMBER}", colour: "#187795", output: "Member" };
        (l["Blocks"][xt] = {
            init: function () {
                this.jsonInit(Pt);
            }
        }),
            (l["JavaScript"][xt] = function () {
                var e = ["rMember", l["JavaScript"].ORDER_NONE];
                return e;
            }),
            ue(xt, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_REACT", types: ["s4d_on_react_added", "s4d_on_react_removed"] }]);
        var Jt = "s4d_react_message_id",
            Yt = { message0: "%{BKY_REACT_MESSAGE_ID}", colour: "#5BA58C", output: "String" };
        (l["Blocks"][Jt] = {
            init: function () {
                this.jsonInit(Yt);
            }
        }),
            (l["JavaScript"][Jt] = function () {
                var e = ["rMessage.id", l["JavaScript"].ORDER_NONE];
                return e;
            }),
            ue(Jt, [{ type: "toplevelparent", message: "RES_MUST_BE_IN_ON_REACT", types: ["s4d_on_react_added", "s4d_on_react_removed"] }]);
        var Kt = "s4d_create_channel",
            jt = {
                message0: "%{BKY_CREATE_CHANNEL}",
                args0: [
                    { type: "input_value", name: "NAME", check: ["String", "Number"] },
                    { type: "input_value", name: "SERVER", check: ["Server"] },
                    {
                        type: "field_dropdown",
                        name: "TYPE",
                        options: [
                            ["%{BKY_TEXT}", "TEXT"],
                            ["%{BKY_VOICE}", "VOICE"],
                            ["%{BKY_CATEGORY}", "CATEGORY"]
                        ]
                    }
                ],
                colour: "#4C97FF",
                previousStatement: null,
                nextStatement: null,
                inputsInline: !1,
                tooltip: "",
                helpUrl: ""
            };
        (ge["Blocks"][Kt] = {
            init: function () {
                this.jsonInit(jt);
            }
        }),
            (ge["JavaScript"][Kt] = function (e) {
                var t = e.getFieldValue("TYPE"),
                    n = ge["JavaScript"].valueToCode(e, "NAME", ge["JavaScript"].ORDER_ATOMIC),
                    a = ge["JavaScript"].valueToCode(e, "SERVER", ge["JavaScript"].ORDER_ATOMIC),
                    o = "".concat(a, ".channels.create(").concat(n, ", {\n        type: '").concat(t.toLowerCase(), "'\n    });\n");
                return o;
            });
        var Ht = "s4d_get_channel",
            Xt = {
                message0: "%{BKY_GET_CHANNEL}",
                args0: [
                    { type: "input_value", name: "VALUE", check: "String" },
                    {
                        type: "field_dropdown",
                        name: "SEARCH_TYPE",
                        options: [
                            ["%{BKY_NAME}", "NAME"],
                            ["id", "ID"]
                        ]
                    }
                ],
                colour: "#a55b80",
                output: "Channel",
                tooltip: "",
                helpUrl: ""
            };
        (ge["Blocks"][Ht] = {
            init: function () {
                this.jsonInit(Xt);
            }
        }),
            (ge["JavaScript"][Ht] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "VALUE", ge["JavaScript"].ORDER_ATOMIC),
                    n = e.getFieldValue("SEARCH_TYPE");
                return "NAME" === n ? ["s4d.client.channels.cache.find((channel) => channel.name === ".concat(t, ")"), ge["JavaScript"].ORDER_ATOMIC] : ["s4d.client.channels.cache.get(".concat(t, ")"), ge["JavaScript"].ORDER_ATOMIC];
            }),
            ue(Ht, [{ type: "notempty", message: "RES_MISSING_CHANNEL_VALUE", types: ["VALUE"] }]);
        var Ft = "s4d_send_channel",
            Wt = {
                message0: "%{BKY_SEND_CHANNEL}",
                args0: [
                    { type: "input_value", name: "CONTENT", check: ["MessageEmbed", "String", "Number"] },
                    { type: "input_value", name: "CHANNEL", check: "Channel" }
                ],
                colour: "#4C97FF",
                previousStatement: null,
                nextStatement: null,
                tooltip: "",
                helpUrl: ""
            };
        (ge["Blocks"][Ft] = {
            init: function () {
                this.jsonInit(Wt);
            }
        }),
            (ge["JavaScript"][Ft] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "CHANNEL", ge["JavaScript"].ORDER_ATOMIC),
                    n = ge["JavaScript"].valueToCode(e, "CONTENT", ge["JavaScript"].ORDER_ATOMIC);
                if (e.getInput("CONTENT").connection.targetConnection) {
                    var a = e.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ? e.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
                    if ("MessageEmbed" === a || (!a && "object" === Object(J["a"])(a))) {
                        var o = "".concat(t, ".send(").concat(n, ");\n");
                        return o;
                    }
                    var r = "".concat(t, ".send(String(").concat(n, "));\n");
                    return r;
                }
                var s = "".concat(t, ".send(String(").concat(n, "));\n");
                return s;
            }),
            ue(Ft, [
                { type: "notempty", message: "RES_SEND_CHANNEL_CONTENT", types: ["CONTENT"] },
                { type: "notempty", message: "RES_SEND_CHANNEL_CHANNEL", types: ["CHANNEL"] }
            ]);
        var $t = "s4d_send_wait_reply",
            zt = {
                message0: "%{BKY_SEND_WAIT_REPLY}",
                args0: [
                    { type: "input_value", name: "CONTENT", check: ["MessageEmbed", "String", "Number"] },
                    { type: "input_value", name: "CHANNEL", check: "Channel" },
                    { type: "input_value", name: "MEMBER", check: "Member" },
                    { type: "input_value", name: "TIME", check: "Number" },
                    { type: "input_statement", name: "THEN" },
                    { type: "input_statement", name: "CATCH" }
                ],
                colour: "#4C97FF",
                previousStatement: null,
                nextStatement: null,
                tooltip: "",
                helpUrl: ""
            };
        (ge["Blocks"][$t] = {
            init: function () {
                this.jsonInit(zt);
            }
        }),
            (ge["JavaScript"][$t] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "CHANNEL", ge["JavaScript"].ORDER_ATOMIC),
                    n = ge["JavaScript"].valueToCode(e, "CONTENT", ge["JavaScript"].ORDER_ATOMIC),
                    a = ge["JavaScript"].valueToCode(e, "MEMBER", ge["JavaScript"].ORDER_ATOMIC),
                    o = ge["JavaScript"].valueToCode(e, "TIME", ge["JavaScript"].ORDER_ATOMIC) || 5,
                    r = ge["JavaScript"].statementToCode(e, "THEN"),
                    s = ge["JavaScript"].statementToCode(e, "CATCH"),
                    i = "";
                if (e.getInput("CONTENT").connection.targetConnection) {
                    var l = e.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ? e.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
                    i = "MessageEmbed" === l || (!l && "object" === Object(J["a"])(l)) ? "".concat(t, ".send(").concat(n, ");\n") : "".concat(t, ".send(String(").concat(n, "));\n");
                } else i = "".concat(t, ".send(String(").concat(n, "));\n");
                return (
                    (i += ""
                        .concat(t, ".awaitMessages((m) => m.author.id === ")
                        .concat(a, ".id, { time: (")
                        .concat(o, "*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content; \n ")
                        .concat(r, " \n s4d.reply = null; }).catch(async (e) => { console.error(e); ")
                        .concat(s, " });")),
                    i
                );
            }),
            ue($t, [
                { type: "notempty", message: "RES_SEND_CHANNEL_CONTENT", types: ["CONTENT"] },
                { type: "notempty", message: "RES_SEND_CHANNEL_CHANNEL", types: ["CHANNEL"] }
            ]);
        var qt = "s4d_send_wait_reply_value",
            Qt = { message0: "%{BKY_SEND_WAIT_REPLY_VALUE}", colour: "#5BA58C", output: "String", tooltip: "", helpUrl: "" };
        (ge["Blocks"][qt] = {
            init: function () {
                this.jsonInit(Qt);
            }
        }),
            (ge["JavaScript"][qt] = function () {
                var e = ["s4d.reply", ge["JavaScript"].ORDER_NONE];
                return e;
            }),
            ue(qt, [{ type: "hasparent", message: "RES_SEND_WAIT_REPLY_VALUE_PARENT", types: ["s4d_send_wait_reply"] }]);
        var Zt = "s4d_boost_level",
            en = { message0: "%{BKY_SERVER_BOOST_LEVEL}", args0: [{ type: "input_value", name: "SERVER", check: "Server" }], colour: "#e07e6c", output: "Number", tooltip: "", helpUrl: "" };
        (ge["Blocks"][Zt] = {
            init: function () {
                this.jsonInit(en);
            }
        }),
            (ge["JavaScript"][Zt] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "SERVER", ge["JavaScript"].ORDER_ATOMIC);
                return ["".concat(t, ".premiumTier"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(Zt, [{ type: "notempty", message: "RES_VALID_SERVER", types: ["SERVER"] }]);
        var tn = "s4d_get_server",
            nn = {
                message0: "%{BKY_GET_SERVER}",
                args0: [
                    { type: "input_value", name: "VALUE", check: "String" },
                    {
                        type: "field_dropdown",
                        name: "SEARCH_TYPE",
                        options: [
                            ["%{BKY_NAME}", "NAME"],
                            ["id", "ID"]
                        ]
                    }
                ],
                colour: "#D85E47",
                output: "Server",
                tooltip: "",
                helpUrl: ""
            };
        (ge["Blocks"][tn] = {
            init: function () {
                this.jsonInit(nn);
            }
        }),
            (ge["JavaScript"][tn] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "VALUE", ge["JavaScript"].ORDER_ATOMIC),
                    n = e.getFieldValue("SEARCH_TYPE");
                return "NAME" === n ? ["s4d.client.guilds.cache.find((guild) => guild.name === ".concat(t, ")"), ge["JavaScript"].ORDER_NONE] : ["s4d.client.guilds.cache.get(".concat(t, ")"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(tn, [{ type: "notempty", message: "RES_GET_SERVER_VALUE", types: ["VALUE"] }]);
        var an = "s4d_icon_url",
            on = { message0: "%{BKY_ICON_URL}", args0: [{ type: "input_value", name: "SERVER", check: "Server" }], colour: "#e07e6c", output: "String", tooltip: "", helpUrl: "" };
        (ge["Blocks"][an] = {
            init: function () {
                this.jsonInit(on);
            }
        }),
            (ge["JavaScript"][an] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "SERVER", ge["JavaScript"].ORDER_ATOMIC);
                return ["".concat(t, ".iconURL({ dynamic: true })"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(an, [{ type: "notempty", message: "RES_VALID_SERVER", types: ["SERVER"] }]);
        var rn = "s4d_member_count",
            sn = { message0: "%{BKY_MEMBER_COUNT}", args0: [{ type: "input_value", name: "SERVER", check: "Server" }], colour: "#e07e6c", output: "Number", tooltip: "", helpUrl: "" };
        (ge["Blocks"][rn] = {
            init: function () {
                this.jsonInit(sn);
            }
        }),
            (ge["JavaScript"][rn] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "SERVER", ge["JavaScript"].ORDER_ATOMIC);
                return ["".concat(t, ".memberCount"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(rn, [{ type: "notempty", message: "RES_VALID_SERVER", types: ["SERVER"] }]);
        var ln = "s4d_server_name",
            cn = { message0: "%{BKY_SERVER_NAME}", args0: [{ type: "input_value", name: "SERVER", check: "Server" }], colour: "#e07e6c", output: "String", tooltip: "", helpUrl: "" };
        (ge["Blocks"][ln] = {
            init: function () {
                this.jsonInit(cn);
            }
        }),
            (ge["JavaScript"][ln] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "SERVER", ge["JavaScript"].ORDER_ATOMIC);
                return ["".concat(t, ".name"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(ln, [{ type: "notempty", message: "RES_VALID_SERVER", types: ["SERVER"] }]);
        var En = "s4d_server_owner",
            _n = { message0: "%{BKY_SERVER_OWNER}", args0: [{ type: "input_value", name: "SERVER", check: "Server" }], colour: "#e07e6c", output: "Member", tooltip: "", helpUrl: "" };
        (ge["Blocks"][En] = {
            init: function () {
                this.jsonInit(_n);
            }
        }),
            (ge["JavaScript"][En] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "SERVER", ge["JavaScript"].ORDER_ATOMIC);
                return ["".concat(t, ".owner || await ").concat(t, ".members.fetch(").concat(t, ".ownerID)"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(En, [{ type: "notempty", message: "RES_VALID_SERVER", types: ["SERVER"] }]);
        var dn = "s4d_set_server_name",
            un = {
                message0: "%{BKY_SET_SERVER_NAME}",
                args0: [
                    { type: "input_value", name: "SERVER", check: "Server" },
                    { type: "input_value", name: "NEW_NICKNAME", check: ["Number", "String"] }
                ],
                previousStatement: null,
                nextStatement: null,
                colour: "#4C97FF",
                tooltip: "",
                helpUrl: ""
            };
        (fe.a.Blocks[dn] = {
            init: function () {
                this.jsonInit(un);
            }
        }),
            (fe.a.JavaScript[dn] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "SERVER", fe.a.JavaScript.ORDER_ATOMIC),
                    n = fe.a.JavaScript.valueToCode(e, "NEW_NICKNAME", fe.a.JavaScript.ORDER_ATOMIC),
                    a = "".concat(t, ".setName(").concat(n, ");\n");
                return a;
            }),
            ue(dn, [
                { type: "notempty", message: "RES_SET_SERVER_NAME_SERVER", types: ["SERVER"] },
                { type: "notempty", message: "RES_SET_SERVER_NAME_NEW_NICKNAME", types: ["NEW_NICKNAME"] }
            ]);
        var mn = "s4d_add_role",
            pn = {
                message0: "%{BKY_ADD_ROLE}",
                args0: [
                    { type: "input_value", name: "ROLE", check: ["String", "Role"] },
                    { type: "input_value", name: "MEMBER", check: "Member" }
                ],
                previousStatement: null,
                nextStatement: null,
                colour: "#4C97FF",
                tooltip: "",
                helpUrl: ""
            };
        (fe.a.Blocks[mn] = {
            init: function () {
                this.jsonInit(pn);
            }
        }),
            (fe.a.JavaScript[mn] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "ROLE", fe.a.JavaScript.ORDER_ATOMIC),
                    n = fe.a.JavaScript.valueToCode(e, "MEMBER", fe.a.JavaScript.ORDER_ATOMIC);
                if (e.getInput("ROLE").connection.targetConnection) {
                    var a = e.getInput("ROLE").connection.targetConnection.getSourceBlock().outputConnection.check_ ? e.getInput("ROLE").connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
                    if ("String" === a) {
                        var o = "".concat(n, ".roles.add(").concat(n, ".guild.roles.cache.find((role) => role.id === ").concat(t, " || role.name === ").concat(t, " || '@'+role.name === ").concat(t, "));\n");
                        return o;
                    }
                    var r = "".concat(n, ".roles.add(").concat(t, ");\n");
                    return r;
                }
                var s = "".concat(n, ".roles.add(").concat(t, ");\n");
                return s;
            }),
            ue(mn, [
                { type: "notempty", message: "RES_ADD_ROLE_MISSING_ROLE", types: ["ROLE"] },
                { type: "notempty", message: "RES_ADD_ROLE_MISSING_MEMBER", types: ["MEMBER"] }
            ]);
        var Sn = ["GET_ROLE_SERVER"],
            vn = ["Server"],
            Rn = "s4d_get_role",
            bn = {
                message0: "%{BKY_GET_ROLE}",
                args0: [
                    { type: "input_value", name: "VALUE", check: "String" },
                    {
                        type: "field_dropdown",
                        name: "SEARCH_TYPE",
                        options: [
                            ["%{BKY_NAME}", "NAME"],
                            ["id", "ID"]
                        ]
                    }
                ],
                colour: "#2EB66B",
                output: "Role",
                mutator: "s4d_get_role_mutator",
                tooltip: "",
                helpUrl: ""
            };
        (ge["Blocks"][Rn] = {
            init: function () {
                this.jsonInit(bn);
            }
        }),
            (ge["Blocks"]["s4d_get_role_mutator"] = {
                init: function () {
                    this.setColour("#CECDCE"), this.setTooltip(""), this.setHelpUrl("");
                }
            });
        var An = {
            inputs_: [!1],
            mutationToDom: function () {
                if (!this.inputs_) return null;
                for (var e = document.createElement("mutation"), t = 0; t < this.inputs_.length; t++) this.inputs_[t] && e.setAttribute(Sn[t], this.inputs_[t]);
                return e;
            },
            domToMutation: function (e) {
                for (var t = 0; t < this.inputs_.length; t++) this.inputs_[t] = "true" == e.getAttribute(Sn[t]);
                this.updateShape_();
            },
            decompose: function (e) {
                for (var t = e.newBlock("s4d_get_role_mutator"), n = 0; n < this.inputs_.length; n++)
                    t.appendDummyInput()
                        .setAlign(ge["ALIGN_RIGHT"])
                        .appendField(c.a.Msg[Sn[n]])
                        .appendField(new ge["FieldCheckbox"](this.inputs_[n] ? "TRUE" : "FALSE"), Sn[n].toUpperCase());
                return t.initSvg(), t;
            },
            compose: function (e) {
                for (var t = 0; t < this.inputs_.length; t++) this.inputs_[t] = "TRUE" == e.getFieldValue(Sn[t].toUpperCase());
                this.updateShape_();
            },
            updateShape_: function () {
                for (var e = 0; e < this.inputs_.length; e++) this.getInput(Sn[e].toUpperCase()) && this.removeInput(Sn[e].toUpperCase());
                for (var t = 0; t < this.inputs_.length; t++) this.inputs_[t] && this.appendValueInput(Sn[t].toUpperCase()).setCheck(vn[t]).setAlign(ge["ALIGN_RIGHT"]).appendField(c.a.Msg[Sn[t]]);
            }
        };
        ge["Extensions"].registerMutator("s4d_get_role_mutator", An, null, [""]),
            (ge["JavaScript"][Rn] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "VALUE", ge["JavaScript"].ORDER_ATOMIC),
                    n = e.getFieldValue("SEARCH_TYPE"),
                    a = e.getFieldValue("GET_ROLE_SERVER");
                return "NAME" === n
                    ? a
                        ? ["".concat(a, ".roles.cache.find((role) => role.name === ").concat(t, ")"), ge["JavaScript"].ORDER_NONE]
                        : ["Array.prototype.concat.apply([], s4d.client.guilds.cache.array().map((g) => g.roles.cache.array())).find((role) => role.name === ".concat(t, ")"), ge["JavaScript"].ORDER_NONE]
                    : a
                    ? ["".concat(a, ".roles.get(").concat(t, ")"), ge["JavaScript"].ORDER_NONE]
                    : ["Array.prototype.concat.apply([], s4d.client.guilds.cache.array().map((g) => g.roles.cache.array())).get(".concat(t, ")"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(Rn, [{ type: "notempty", message: "RES_GET_ROLE_VALUE", types: ["VALUE"] }]);
        var Mn = "s4d_remove_role",
            Tn = {
                message0: "%{BKY_REMOVE_ROLE}",
                args0: [
                    { type: "input_value", name: "ROLE", check: ["String", "Role"] },
                    { type: "input_value", name: "MEMBER", check: "Member" }
                ],
                previousStatement: null,
                nextStatement: null,
                colour: "#4C97FF",
                tooltip: "",
                helpUrl: ""
            };
        (fe.a.Blocks[Mn] = {
            init: function () {
                this.jsonInit(Tn);
            }
        }),
            (fe.a.JavaScript[Mn] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "ROLE", fe.a.JavaScript.ORDER_ATOMIC),
                    n = fe.a.JavaScript.valueToCode(e, "MEMBER", fe.a.JavaScript.ORDER_ATOMIC);
                if (e.getInput("ROLE").connection.targetConnection) {
                    var a = e.getInput("ROLE").connection.targetConnection.getSourceBlock().outputConnection.check_ ? e.getInput("ROLE").connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
                    if ("String" === a) {
                        var o = "".concat(n, ".roles.remove(").concat(n, ".guild.roles.cache.find((role) => role.id === ").concat(t, " || role.name === ").concat(t, " || '@'+role.name === ").concat(t, "));\n");
                        return o;
                    }
                    var r = "".concat(n, ".roles.remove(").concat(t, ");\n");
                    return r;
                }
                var s = "".concat(n, ".roles.remove(").concat(t, ");\n");
                return s;
            }),
            ue(Mn, [
                { type: "notempty", message: "RES_REMOVE_ROLE_MISSING_ROLE", types: ["ROLE"] },
                { type: "notempty", message: "RES_REMOVE_ROLE_MISSING_MEMBER", types: ["MEMBER"] }
            ]);
        var Nn = "s4d_ban_member",
            On = { message0: "%{BKY_BAN_MEMBER}", args0: [{ type: "input_value", name: "MEMBER", check: "Member" }], previousStatement: null, nextStatement: null, colour: "#4C97FF", tooltip: "", helpUrl: "" };
        (fe.a.Blocks[Nn] = {
            init: function () {
                this.jsonInit(On);
            }
        }),
            (fe.a.JavaScript[Nn] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "MEMBER", fe.a.JavaScript.ORDER_ATOMIC),
                    n = "".concat(t, ".ban();\n");
                return n;
            }),
            ue(Nn, [{ type: "notempty", message: "RES_BAN_MEMBER_MISSING_MEMBER", types: ["MEMBER"] }]);
        var gn = "s4d_get_member",
            fn = {
                message0: "%{BKY_GET_MEMBER}",
                args0: [
                    { type: "input_value", name: "VALUE", check: "String" },
                    {
                        type: "field_dropdown",
                        name: "SEARCH_TYPE",
                        options: [
                            ["%{BKY_USERNAME}", "USERNAME"],
                            ["id", "ID"]
                        ]
                    },
                    { type: "input_value", name: "SERVER", check: "Server" }
                ],
                colour: "#187795",
                output: "Member",
                tooltip: "",
                helpUrl: ""
            };
        (ge["Blocks"][gn] = {
            init: function () {
                this.jsonInit(fn);
            }
        }),
            (ge["JavaScript"][gn] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "VALUE", ge["JavaScript"].ORDER_ATOMIC),
                    n = e.getFieldValue("SEARCH_TYPE"),
                    a = ge["JavaScript"].valueToCode(e, "SERVER", ge["JavaScript"].ORDER_ATOMIC);
                return "USERNAME" === n ? ["".concat(a, ".members.cache.find((m) => m.user.username === ").concat(t, ")"), ge["JavaScript"].ORDER_NONE] : ["(".concat(a, ".members.cache.get(").concat(t, ") || await ").concat(a, ".members.fetch(").concat(t, "))"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(gn, [
                { type: "notempty", message: "RES_GET_MEMBER_VALUE", types: ["VALUE"] },
                { type: "notempty", message: "RES_GET_MEMBER_SERVER", types: ["SERVER"] }
            ]);
        var In = "s4d_kick_member",
            hn = { message0: "%{BKY_KICK_MEMBER}", args0: [{ type: "input_value", name: "MEMBER", check: "Member" }], previousStatement: null, nextStatement: null, colour: "#4C97FF", tooltip: "", helpUrl: "" };
        (fe.a.Blocks[In] = {
            init: function () {
                this.jsonInit(hn);
            }
        }),
            (fe.a.JavaScript[In] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "MEMBER", fe.a.JavaScript.ORDER_ATOMIC),
                    n = "".concat(t, ".kick();\n");
                return n;
            }),
            ue(In, [{ type: "notempty", message: "RES_KICK_MEMBER_MISSING_MEMBER", types: ["MEMBER"] }]);
        var yn = "s4d_member_discriminator",
            Bn = { message0: "%{BKY_MEMBER_DISCRIMINATOR}", args0: [{ type: "input_value", name: "MEMBER", check: "Member" }], colour: "#50a6c9", output: "String", tooltip: "", helpUrl: "" };
        (ge["Blocks"][yn] = {
            init: function () {
                this.jsonInit(Bn);
            }
        }),
            (ge["JavaScript"][yn] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "MEMBER", ge["JavaScript"].ORDER_ATOMIC);
                return ["".concat(t, ".user.discriminator"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(yn, [{ type: "notempty", message: "RES_VALID_MEMBER", types: ["MEMBER"] }]);
        var kn = "s4d_member_has_permission",
            Cn = {
                message0: "%{BKY_MEMBER_HAS_PERMISSION}",
                args0: [
                    { type: "input_value", name: "MEMBER", check: "Member" },
                    {
                        type: "field_dropdown",
                        name: "PERMISSION",
                        options: [
                            ["%{BKY_PERM_CREATE_INSTANT_INVITE}", "CREATE_INSTANT_INVITE"],
                            ["%{BKY_PERM_KICK_MEMBERS}", "KICK_MEMBERS"],
                            ["%{BKY_PERM_BAN_MEMBERS}", "BAN_MEMBERS"],
                            ["%{BKY_PERM_ADMINISTRATOR}", "ADMINISTRATOR"],
                            ["%{BKY_PERM_MANAGE_CHANNELS}", "MANAGE_CHANNELS"],
                            ["%{BKY_PERM_MANAGE_GUILD}", "MANAGE_GUILD"],
                            ["%{BKY_PERM_ADD_REACTIONS}", "ADD_REACTIONS"],
                            ["%{BKY_PERM_VIEW_AUDIT_LOG}", "VIEW_AUDIT_LOG"],
                            ["%{BKY_PERM_PRIORITY_SPEAKER}", "PRIORITY_SPEAKER"],
                            ["%{BKY_PERM_VIEW_CHANNEL}", "VIEW_CHANNEL"],
                            ["%{BKY_PERM_READ_MESSAGES}", "READ_MESSAGES"],
                            ["%{BKY_PERM_SEND_MESSAGES}", "SEND_MESSAGES"],
                            ["%{BKY_PERM_SEND_TTS_MESSAGES}", "SEND_TTS_MESSAGES"],
                            ["%{BKY_PERM_MANAGE_MESSAGES}", "MANAGE_MESSAGES"],
                            ["%{BKY_PERM_EMBED_LINKS}", "EMBED_LINKS"],
                            ["%{BKY_PERM_ATTACH_FILES}", "ATTACH_FILES"],
                            ["%{BKY_PERM_READ_MESSAGE_HISTORY}", "READ_MESSAGE_HISTORY"],
                            ["%{BKY_PERM_MENTION_EVERYONE}", "MENTION_EVERYONE"],
                            ["%{BKY_PERM_EXTERNAL_EMOJIS}", "EXTERNAL_EMOJIS"],
                            ["%{BKY_PERM_USE_EXTERNAL_EMOJIS}", "USE_EXTERNAL_EMOJIS"],
                            ["%{BKY_PERM_CONNECT}", "CONNECT"],
                            ["%{BKY_PERM_SPEAK}", "SPEAK"],
                            ["%{BKY_PERM_MUTE_MEMBERS}", "MUTE_MEMBERS"],
                            ["%{BKY_PERM_DEAFEN_MEMBERS}", "DEAFEN_MEMBERS"],
                            ["%{BKY_PERM_MOVE_MEMBERS}", "MOVE_MEMBERS"],
                            ["%{BKY_PERM_USE_VAD}", "USE_VAD"],
                            ["%{BKY_PERM_CHANGE_NICKNAME}", "CHANGE_NICKNAME"],
                            ["%{BKY_PERM_MANAGE_NICKNAMES}", "MANAGE_NICKNAMES"],
                            ["%{BKY_PERM_MANAGE_ROLES}", "MANAGE_ROLES"],
                            ["%{BKY_PERM_MANAGE_WEBHOOKS}", "MANAGE_WEBHOOKS"],
                            ["%{BKY_PERM_MANAGE_EMOJIS}", "MANAGE_EMOJIS"]
                        ]
                    }
                ],
                colour: "#5B80A5",
                tooltip: "",
                output: "Boolean",
                helpUrl: ""
            };
        (fe.a.Blocks[kn] = {
            init: function () {
                this.jsonInit(Cn);
            }
        }),
            (fe.a.JavaScript[kn] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "MEMBER", fe.a.JavaScript.ORDER_ATOMIC),
                    n = e.getFieldValue("PERMISSION"),
                    a = ["".concat(t, ".hasPermission('").concat(n, "')"), fe.a.JavaScript.ORDER_FUNCTION_CALL];
                return a;
            }),
            ue(kn, [{ type: "notempty", message: "RES_MISSING_MEMBER_HAS_PERMISSION", types: ["MEMBER"] }]);
        var Dn = "s4d_member_id",
            Ln = { message0: "%{BKY_MEMBER_ID}", args0: [{ type: "input_value", name: "MEMBER", check: "Member" }], colour: "#50a6c9", output: "String", tooltip: "", helpUrl: "" };
        (ge["Blocks"][Dn] = {
            init: function () {
                this.jsonInit(Ln);
            }
        }),
            (ge["JavaScript"][Dn] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "MEMBER", ge["JavaScript"].ORDER_ATOMIC);
                return ["".concat(t, ".user.id"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(Dn, [{ type: "notempty", message: "RES_VALID_MEMBER", types: ["MEMBER"] }]);
        var Un = "s4d_member_is_bot",
            Gn = { message0: "%{BKY_MEMBER_IS_BOT}", args0: [{ type: "input_value", name: "MEMBER", check: "Member" }], colour: "#5B80A5", output: "Boolean", tooltip: "", helpUrl: "" };
        (ge["Blocks"][Un] = {
            init: function () {
                this.jsonInit(Gn);
            }
        }),
            (ge["JavaScript"][Un] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "MEMBER", ge["JavaScript"].ORDER_ATOMIC);
                return ["".concat(t, ".user.bot"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(Un, [{ type: "notempty", message: "RES_VALID_MEMBER", types: ["MEMBER"] }]);
        var wn = "s4d_member_tag",
            Vn = { message0: "%{BKY_MEMBER_TAG}", args0: [{ type: "input_value", name: "MEMBER", check: "Member" }], colour: "#50a6c9", output: "String", tooltip: "", helpUrl: "" };
        (ge["Blocks"][wn] = {
            init: function () {
                this.jsonInit(Vn);
            }
        }),
            (ge["JavaScript"][wn] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "MEMBER", ge["JavaScript"].ORDER_ATOMIC);
                return ["".concat(t, ".user.tag"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(wn, [{ type: "notempty", message: "RES_VALID_MEMBER", types: ["MEMBER"] }]);
        var xn = "s4d_member_username",
            Pn = { message0: "%{BKY_MEMBER_USERNAME}", args0: [{ type: "input_value", name: "MEMBER", check: "Member" }], colour: "#50a6c9", output: "String", tooltip: "", helpUrl: "" };
        (ge["Blocks"][xn] = {
            init: function () {
                this.jsonInit(Pn);
            }
        }),
            (ge["JavaScript"][xn] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "MEMBER", ge["JavaScript"].ORDER_ATOMIC);
                return ["".concat(t, ".user.username"), ge["JavaScript"].ORDER_NONE];
            }),
            ue(xn, [{ type: "notempty", message: "RES_VALID_MEMBER", types: ["MEMBER"] }]);
        var Jn = "s4d_send_member",
            Yn = {
                message0: "%{BKY_SEND_MEMBER}",
                args0: [
                    { type: "input_value", name: "CONTENT", check: ["MessageEmbed", "String", "Number"] },
                    { type: "input_value", name: "MEMBER", check: "Member" }
                ],
                previousStatement: null,
                nextStatement: null,
                colour: "#4C97FF",
                tooltip: "",
                helpUrl: ""
            };
        (fe.a.Blocks[Jn] = {
            init: function () {
                this.jsonInit(Yn);
            }
        }),
            (fe.a.JavaScript[Jn] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "MEMBER", fe.a.JavaScript.ORDER_ATOMIC),
                    n = fe.a.JavaScript.valueToCode(e, "CONTENT", fe.a.JavaScript.ORDER_ATOMIC);
                if (e.getInput("CONTENT").connection.targetConnection) {
                    var a = e.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ? e.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
                    if ("MessageEmbed" === a || (!a && "object" === Object(J["a"])(a))) {
                        var o = "".concat(t, ".send(").concat(n, ");\n");
                        return o;
                    }
                    var r = "".concat(t, ".send(String(").concat(n, "));\n");
                    return r;
                }
                var s = "".concat(t, ".send(String(").concat(n, "));\n");
                return s;
            }),
            ue(Jn, [
                { type: "notempty", message: "RES_SEND_CHANNEL_CONTENT", types: ["CONTENT"] },
                { type: "notempty", message: "RES_SEND_MEMBER_MISSING_MEMBER", types: ["MEMBER"] }
            ]);
        var Kn = "s4d_set_member_nickname",
            jn = {
                message0: "%{BKY_SET_MEMBER_NICKNAME}",
                args0: [
                    { type: "input_value", name: "MEMBER", check: "Member" },
                    { type: "input_value", name: "NEW_NICKNAME", check: ["Number", "String"] }
                ],
                previousStatement: null,
                nextStatement: null,
                colour: "#4C97FF",
                tooltip: "",
                helpUrl: ""
            };
        (fe.a.Blocks[Kn] = {
            init: function () {
                this.jsonInit(jn);
            }
        }),
            (fe.a.JavaScript[Kn] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "MEMBER", fe.a.JavaScript.ORDER_ATOMIC),
                    n = fe.a.JavaScript.valueToCode(e, "NEW_NICKNAME", fe.a.JavaScript.ORDER_ATOMIC),
                    a = "".concat(t, ".setNickname(").concat(n, ");\n");
                return a;
            }),
            ue(Kn, [
                { type: "notempty", message: "RES_SET_MEMBER_NICKNAME_MEMBER", types: ["MEMBER"] },
                { type: "notempty", message: "RES_SET_MEMBER_NICKNAME_NEW_NICKNAME", types: ["NEW_NICKNAME"] }
            ]);
        var Hn = "s4d_add_data",
            Xn = {
                message0: "%{BKY_ADD_DATA}",
                args0: [
                    { type: "input_value", name: "COUNT", check: "Number" },
                    { type: "input_value", name: "KEY", check: ["String", "Number"] }
                ],
                nextStatement: null,
                previousStatement: null,
                colour: "#5ba58b",
                helpUrl: ""
            };
        (fe.a.Blocks[Hn] = {
            init: function () {
                this.jsonInit(Xn);
            }
        }),
            (fe.a.JavaScript[Hn] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "KEY", fe.a.JavaScript.ORDER_ATOMIC),
                    n = fe.a.JavaScript.valueToCode(e, "COUNT", fe.a.JavaScript.ORDER_ATOMIC);
                return "s4d.database.add(String(".concat(t, "), parseInt(").concat(n, "));\n");
            });
        var Fn = "s4d_delete_data",
            Wn = { message0: "%{BKY_DELETE_DATA}", args0: [{ type: "input_value", name: "KEY", check: ["String", "Number"] }], previousStatement: null, nextStatement: null, colour: "#5ba58b", helpUrl: "" };
        (fe.a.Blocks[Fn] = {
            init: function () {
                this.jsonInit(Wn);
            }
        }),
            (fe.a.JavaScript[Fn] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "KEY", fe.a.JavaScript.ORDER_ATOMIC);
                return "s4d.database.delete(String(".concat(t, "));\n");
            });
        var $n = "s4d_get_data",
            zn = { message0: "%{BKY_GET_DATA}", args0: [{ type: "input_value", name: "KEY", check: ["String", "Number"] }], output: null, colour: "#5ba58b", helpUrl: "" };
        (fe.a.Blocks[$n] = {
            init: function () {
                this.jsonInit(zn);
            }
        }),
            (fe.a.JavaScript[$n] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "KEY", fe.a.JavaScript.ORDER_ATOMIC);
                return ["s4d.database.get(String(" + t + "))", fe.a.JavaScript.ORDER_ATOMIC];
            });
        var qn = "s4d_has_data",
            Qn = { message0: "%{BKY_HAS_DATA}", args0: [{ type: "input_value", name: "KEY", check: ["String", "Number"] }], output: "Boolean", colour: "#5ba58b", helpUrl: "" };
        (fe.a.Blocks[qn] = {
            init: function () {
                this.jsonInit(Qn);
            }
        }),
            (fe.a.JavaScript[qn] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "KEY", fe.a.JavaScript.ORDER_ATOMIC);
                return ["s4d.database.has(String(" + t + "))", fe.a.JavaScript.ORDER_ATOMIC];
            });
        var Zn = "s4d_set_data",
            ea = {
                message0: "%{BKY_SET_DATA}",
                args0: [
                    { type: "input_value", name: "KEY", check: ["String", "Number"] },
                    { type: "input_value", name: "VALUE" }
                ],
                previousStatement: null,
                nextStatement: null,
                colour: "#5ba58b",
                helpUrl: ""
            };
        (fe.a.Blocks[Zn] = {
            init: function () {
                this.jsonInit(ea);
            }
        }),
            (fe.a.JavaScript[Zn] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "KEY", fe.a.JavaScript.ORDER_ATOMIC),
                    n = fe.a.JavaScript.valueToCode(e, "VALUE", fe.a.JavaScript.ORDER_ATOMIC);
                return "s4d.database.set(String(".concat(t, "), ").concat(n, ");\n");
            });
        var ta = "s4d_subtract_data",
            na = {
                message0: "%{BKY_SUBTRACT_DATA}",
                args0: [
                    { type: "input_value", name: "COUNT", check: "Number" },
                    { type: "input_value", name: "KEY", check: ["String", "Number"] }
                ],
                nextStatement: null,
                previousStatement: null,
                colour: "#5ba58b",
                helpUrl: ""
            };
        (fe.a.Blocks[ta] = {
            init: function () {
                this.jsonInit(na);
            }
        }),
            (fe.a.JavaScript[ta] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "KEY", fe.a.JavaScript.ORDER_ATOMIC),
                    n = fe.a.JavaScript.valueToCode(e, "COUNT", fe.a.JavaScript.ORDER_ATOMIC);
                return "s4d.database.subtract(String(".concat(t, "), parseInt(").concat(n, "));\n");
            });
        var aa = "s4d_newline",
            oa = { message0: "%{BKY_NEWLINE}", output: "String", colour: "#5ba58b", helpUrl: "" };
        (fe.a.Blocks[aa] = {
            init: function () {
                this.jsonInit(oa);
            }
        }),
            (fe.a.JavaScript[aa] = function () {
                return ["'\\n'", fe.a.JavaScript.ORDER_ATOMIC];
            });
        var ra = "s4d_starts_with",
            sa = {
                message0: "%{BKY_STARTS_WITH}",
                args0: [
                    { type: "input_value", name: "STRING", check: ["String"] },
                    { type: "input_value", name: "SUBSTRING", check: ["String"] }
                ],
                output: "Boolean",
                colour: "#5ba58b",
                tooltip: "",
                helpUrl: ""
            };
        (fe.a.Blocks[ra] = {
            init: function () {
                this.jsonInit(sa);
            }
        }),
            (fe.a.JavaScript[ra] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "STRING", fe.a.JavaScript.ORDER_ATOMIC),
                    n = fe.a.JavaScript.valueToCode(e, "SUBSTRING", fe.a.JavaScript.ORDER_ATOMIC),
                    a = ["(".concat(t, " || '').startsWith(").concat(n, " || '')"), fe.a.JavaScript.ORDER_NONE];
                return a;
            });
        var ia = "s4d_includes",
            la = {
                message0: "%{BKY_INCLUDES}",
                args0: [
                    { type: "input_value", name: "TEXT", check: "String" },
                    { type: "input_value", name: "INCLUDES", check: "String" }
                ],
                output: "Boolean",
                colour: "#5ba58b",
                tooltip: "",
                helpUrl: ""
            };
        (fe.a.Blocks[ia] = {
            init: function () {
                this.jsonInit(la);
            }
        }),
            (fe.a.JavaScript[ia] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "TEXT", fe.a.JavaScript.ORDER_ATOMIC),
                    n = fe.a.JavaScript.valueToCode(e, "INCLUDES", fe.a.JavaScript.ORDER_ATOMIC),
                    a = ["String(".concat(t, ").includes(String(").concat(n, "))"), fe.a.JavaScript.ORDER_NONE];
                return a;
            }),
            ue(ia, [
                { type: "notempty", message: "RES_INCLUDES_TEXT", types: ["TEXT"] },
                { type: "notempty", message: "RES_INCLUDES_INCLUDES", types: ["INCLUDES"] }
            ]);
        var ca = "s4d_replace",
            Ea = {
                message0: "%{BKY_REPLACE}",
                args0: [
                    { type: "input_value", name: "TEXT", check: "String" },
                    { type: "input_value", name: "REPLACE", check: "String" },
                    { type: "input_value", name: "WITH", check: "String" }
                ],
                output: "String",
                colour: "#5ba58b",
                tooltip: "",
                helpUrl: ""
            };
        (fe.a.Blocks[ca] = {
            init: function () {
                this.jsonInit(Ea);
            }
        }),
            (fe.a.JavaScript[ca] = function (e) {
                var t = fe.a.JavaScript.valueToCode(e, "TEXT", fe.a.JavaScript.ORDER_ATOMIC),
                    n = fe.a.JavaScript.valueToCode(e, "REPLACE", fe.a.JavaScript.ORDER_ATOMIC),
                    a = fe.a.JavaScript.valueToCode(e, "WITH", fe.a.JavaScript.ORDER_ATOMIC),
                    o = ["String(".concat(t, ").replace(new RegExp(String(").concat(n, "), 'g'), String(").concat(a, "))"), fe.a.JavaScript.ORDER_NONE];
                return o;
            }),
            ue(ca, [
                { type: "notempty", message: "RES_REPLACE_STRING", types: ["TEXT"] },
                { type: "notempty", message: "RES_REPLACE_REPLACE", types: ["REPLACE"] },
                { type: "notempty", message: "RES_REPLACE_WITH", types: ["WITH"] }
            ]);
        var _a = "s4d_forever",
            da = { message0: "%{BKY_FOREVER}", args0: [{ type: "input_dummy" }, { type: "input_statement", name: "STATEMENT" }], colour: "#5BA55B", previousStatement: null, nextStatement: null, tooltip: "", helpUrl: "" };
        (fe.a.Blocks[_a] = {
            init: function () {
                this.jsonInit(da);
            }
        }),
            (fe.a.JavaScript[_a] = function (e) {
                return "\n        while(s4d.client && s4d.client.token) {\n            await delay(50);\n            ".concat(fe.a.JavaScript.statementToCode(e, "STATEMENT"), "\n            console.log('ran')\n        }\n    ");
            });
        var ua = "s4d_current",
            ma = {
                message0: "%{BKY_CURRENT}",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "DATA_TYPE",
                        options: [
                            ["%{BKY_SECOND}", "SECOND"],
                            ["%{BKY_MINUTE}", "MINUTE"],
                            ["%{BKY_HOUR}", "HOUR"],
                            ["%{BKY_DATE}", "DATE"],
                            ["%{BKY_DAY_OF_WEEK}", "DAY_OF_WEEK"]
                        ]
                    }
                ],
                output: "Number",
                colour: "#D14081",
                tooltip: "",
                helpUrl: ""
            };
        (fe.a.Blocks[ua] = {
            init: function () {
                this.jsonInit(ma);
            }
        }),
            (fe.a.JavaScript[ua] = function (e) {
                var t = e.getFieldValue("DATA_TYPE");
                return "SECOND" === t
                    ? ["(new Date().getSeconds())", fe.a.JavaScript.ORDER_NONE]
                    : "MINUTE" === t
                    ? ["(new Date().getMinutes())", fe.a.JavaScript.ORDER_NONE]
                    : "HOUR" === t
                    ? ["(new Date().getHours())", fe.a.JavaScript.ORDER_NONE]
                    : "DATE" === t
                    ? ["(new Date().getDate())", fe.a.JavaScript.ORDER_NONE]
                    : "DAY_OF_WEEK" === t
                    ? ["(new Date().getDay())", fe.a.JavaScript.ORDER_NONE]
                    : void 0;
            });
        var pa = "s4d_run_save_output",
            Sa = {
                message0: "%{BKY_RUN_SAVE_OUTPUT}",
                args0: [
                    { type: "input_statement", name: "STATEMENT", check: "RunnableActionWithResult" },
                    { type: "field_variable", name: "VAR", variable: null }
                ],
                colour: "#D14081",
                tooltip: "",
                helpUrl: "",
                inputsInline: !1,
                previousStatement: null,
                nextStatement: null
            };
        (ge["Blocks"][pa] = {
            init: function () {
                this.jsonInit(Sa);
            }
        }),
            (ge["JavaScript"][pa] = function (e) {
                var t = "".concat(ge["JavaScript"].variableDB_.getName(e.getFieldValue("VAR"), ge["Variables"].NAME_TYPE), " = await ").concat(ge["JavaScript"].statementToCode(e, "STATEMENT"));
                return t;
            }),
            ue(pa, [{ type: "custom", message: "The 'run' block must encapsulate exactly one statement", code: "if (block.getFirstStatementConnection().isConnected()) _return = !block.getFirstStatementConnection().targetBlock().getNextBlock(); else _return = false;" }]);
        var va = "s4d_wait_seconds",
            Ra = { message0: "%{BKY_WAIT_SECONDS}", args0: [{ type: "input_value", name: "TIME", check: ["Number", "String"] }], colour: "#D14081", previousStatement: null, nextStatement: null, tooltip: "", helpUrl: "" };
        (ge["Blocks"][va] = {
            init: function () {
                this.jsonInit(Ra);
            }
        }),
            (ge["JavaScript"][va] = function (e) {
                var t = ge["JavaScript"].valueToCode(e, "TIME", ge["JavaScript"].ORDER_ATOMIC);
                return "await delay(Number(".concat(t, ")*1000);\n");
            });
        var ba = n("3d20"),
            Aa = n.n(ba),
            Ma = function (e) {
                return e;
            };
        ge["prompt"] = function (e, t, n) {
            Aa.a
                .fire({
                    title: "Variable:",
                    input: "text",
                    inputAttributes: { autocapitalize: "off" },
                    showCancelButton: !0,
                    confirmButtonText: "Look up",
                    showLoaderOnConfirm: !0,
                    allowOutsideClick: function () {
                        return !Aa.a.isLoading();
                    }
                })
                .then(function (e) {
                    e.value && n(Ma(e.value));
                });
        };
        var Ta = n("4278");
        c.a.Tooltip.HOVER_MS = 100;
        var Na = {
                name: "app",
                components: { BlocklyComponent: Oe, NavBarComponent: ie },
                beforeCreate: function () {
                    this.$root.$i18n.locale = this.$store.state.blocklyLocale;
                },
                mounted: function () {
                    var e = localStorage.getItem("tourDone");
                    null !== e && this.$store.commit("setTour", { status: e });
                    var t = localStorage.getItem("blocklyLocale");
                    null !== t && (this.$store.commit("setLocale", { newLocale: t }), this.setLanguage(t)), this.$store.state.tourDone || (this.$tours["start-tour"].start(), this.$store.commit("setTour", { status: !0 }));
                },
                data: function () {
                    return {
                        options: { renderer: "zelos", theme: Ta["a"], zoom: { controls: !0, startScale: 0.9, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2 } },
                        vueTourOptions: {
                            labels: { buttonSkip: this.$t("tour.skip"), buttonPrevious: this.$t("tour.previous"), buttonNext: this.$t("tour.next"), buttonStop: this.$t("tour.finish") },
                            steps: [
                                { target: "#v-step-0", content: this.$t("tour.steps.load_examples"), params: { enableScrolling: !1 } },
                                { target: "#v-step-1", content: this.$t("tour.steps.run_test"), params: { enableScrolling: !1 } },
                                { target: "#v-step-2", content: this.$t("tour.steps.export_code"), params: { enableScrolling: !1 } }
                            ]
                        }
                    };
                }
            },
            Oa = Na,
            ga = (n("034f"), Object(R["a"])(Oa, s, i, !1, null, null, null)),
            fa = ga.exports,
            Ia = n("2f62");
        a["default"].use(Ia["a"]);
        var ha = new Ia["a"].Store({
                state: { workspace: 0, blocklyLocale: ["en", "fr"].includes(navigator.language.split("-")[0]) ? navigator.language.split("-")[0] : "en", tourDone: !1 },
                mutations: {
                    setWorkspace: function (e, t) {
                        var n = t.workspace;
                        e.workspace = n;
                    },
                    setLocale: function (e, t) {
                        var n = t.newLocale;
                        (e.blocklyLocale = n), localStorage.setItem("blocklyLocale", n);
                    },
                    setTour: function (e, t) {
                        var n = t.status;
                        (e.tourDone = n), localStorage.setItem("tourDone", n);
                    }
                }
            }),
            ya = n("14ba"),
            Ba = n.n(ya),
            ka = n("a925"),
            Ca = n("b079"),
            Da = n.n(Ca),
            La = n("2536"),
            Ua = n.n(La),
            Ga = n("ecee"),
            wa = n("c074"),
            Va = n("ad3d"),
            xa = n("a884"),
            Pa = n.n(xa),
            Ja = n("6a79"),
            Ya = n.n(Ja),
            Ka = n("bfb0"),
            ja = n.n(Ka),
            Ha = n("e0e1"),
            Xa = function () {
                for (var e in Ha) c.a.Msg[e] = Ha[e];
            },
            Fa = {
                untitled: "Untitled document",
                help: "Help",
                load: { error: "The uploaded file is corrupted and cannot be loaded by Scratch For Discord..." },
                file: { title: "File", javascript: "Export to Javascript", open: "Open a file...", save: "Save" },
                edit: { title: "Edit", undo: "Undo", redo: "Redo", clear: "Clear {blockCount} blocks", cleanup: "Clean up blocks", cleardb: "Clear the database" },
                lang: { title: "Language" },
                examples: {
                    title: "Examples",
                    confirm: { title: "Delete current blocks?", text: "Would you like to remove the blocks from the current project before importing the example?", cancel: "Cancel", yes: "Yes", no: "No" },
                    loaded: "Example {example} successfully imported!",
                    ping_pong: "ping-pong command",
                    command_parsing: "commands handler",
                    leveling: "XP and levels system"
                },
                download: {
                    title: "Download your bot",
                    content: { title: "How to start your bot once downloaded?", unzipFile: "Unzip the downloaded file.", node: "Install NPM and Node.js (search for tutorials on Google)", start: "Run 'npm install' and 'npm start' in a terminal", done: "Your bot is started!" },
                    cancel: "Cancel",
                    confirm: "Download"
                },
                tour: { skip: "Skip tour", previous: "Previous", next: "Next", finish: "Finish", steps: { load_examples: "Import examples to discover Scratch4Discord!", run_test: "Test the functionalities of your bot here!", export_code: "Export your code here!" } },
                warnings: { login_block: 'The "Connect to Discord" block in the "Base" category is mandatory.' },
                run_modal: {
                    title: "Click Start to test your bot!",
                    start: "Start the bot",
                    stop: "Stop the bot",
                    invalid_token: "Unable to connect to Discord... Maybe the bot's token isn't valid!",
                    error: "Unable to connect to Discord... Try again later!",
                    disabled: "⚠️ This feature is only available using the Scratch For Discord App (get it {here})",
                    here: "here"
                },
                code_modal: { title: "JavaScript code of your bot" }
            },
            Wa = { applyBlocklyLocale: Xa, websiteMessages: Fa },
            $a = n("cfe4"),
            za = function () {
                for (var e in $a) c.a.Msg[e] = $a[e];
            },
            qa = {
                untitled: "Document sans titre",
                help: "Aide",
                load: { error: "Le fichier téléversé est corrompu et ne peut pas être chargé par Scratch For Discord..." },
                file: { title: "Fichier", javascript: "Exporter vers Javascript", open: "Ouvrir un fichier...", save: "Sauvegarder" },
                edit: { title: "Modifier", undo: "Annuler", redo: "Rétablir", clear: "Nettoyer {blockCount} blocks", cleanup: "Réorganiser les blocks", cleardb: "Effacer la base de données" },
                lang: { title: "Langue" },
                examples: {
                    title: "Exemples",
                    confirm: { title: "Supprimer les blocks", text: "Souhaitez-vous supprimer les blocks du projet actuel avant d'importer l'exemple ?", cancel: "Annuler", yes: "Oui", no: "Non" },
                    loaded: "Exemple {example} importé avec succès !",
                    ping_pong: "Commande ping-pong",
                    command_parsing: "Traitement des commandes",
                    leveling: "Système d'XP et niveaux"
                },
                download: {
                    title: "Télécharger votre bot",
                    content: { title: "Comment lancer votre bot une fois le bot téléchargé ?", unzipFile: "Dézippez le fichier obtenu.", node: "Installez NPM et Node.js (cherchez des tutos sur google)", start: "Tapez 'npm install' et 'npm start' dans votre terminal", done: "Votre bot est lancé!" },
                    cancel: "Annuler",
                    confirm: "Télécharger"
                },
                tour: { skip: "Sauter la visite", previous: "Précédent", next: "Suivant", finish: "Finir", steps: { load_examples: "Importer des exemples pour découvrir Scratch4Discord!", run_test: "Testez le fonctionnement de votre bot ici!", export_code: "Exportez votre code ici!" } },
                warnings: { login_block: 'Le block "Connexion à Discord" de la catégorie "Base" est obligatoire !' },
                run_modal: {
                    title: "Appuyez sur démarrer pour tester votre bot!",
                    start: "Démarrer le bot",
                    stop: "Arrêter le bot",
                    invalid_token: "Impossible de se connecter à Discord... Peut-être que le token du bot n'est pas valide !",
                    error: "Impossible de se connecter à Discord... Réessayez plus tard!",
                    disabled: "⚠️ Cette fonction n'est disponible qu'avec l'application Scratch For Discord (obtenez la {here})",
                    here: "ici"
                },
                code_modal: { title: "Code JavaScript de votre bot" }
            },
            Qa = { applyBlocklyLocale: za, websiteMessages: qa },
            Za = n("03bd"),
            eo = function () {
                for (var e in Za) c.a.Msg[e] = Za[e];
            },
            to = {
                untitled: "Documento sem nome",
                help: "Ajuda",
                load: { error: "O arquivo enviado está corrompido e não pode ser carregado pelo Scratch For Discord..." },
                file: { title: "Arquivo", javascript: "Exporta para javascirpt", open: "abrir arquivo...", save: "Salva" },
                edit: { title: "Edita", undo: "desfazer", redo: "refazer", clear: "deleta {blockCount} blocos", cleanup: "limpa blocos", cleardb: "limpa database" },
                lang: { title: "linguagem" },
                examples: {
                    title: "Exemplos",
                    confirm: { title: "Deleta os blocos atual?", text: "Você gostaria de remover os blocos do projeto atual antes de importar o exemplo?", cancel: "Cancela", yes: "Sim", no: "Não" },
                    loaded: "Exemplo {example} importando com sucesso!",
                    ping_pong: "comando ping-pong",
                    command_parsing: "handler de comandos",
                    leveling: "XP e sistema de níveis"
                },
                download: {
                    title: "Instale o seu bot",
                    content: { title: "Como iniciar o seu bot depois de baixado?", unzipFile: "Descompacte o arquivo baixado.", node: "Instale o NPM e o Node.js (pesquise tutoriais no Google)", start: "Execute 'npm install' e 'npm start' em um terminal", done: "Seu bot foi iniciado!" },
                    cancel: "Cancela",
                    confirm: "Instala"
                },
                tour: { skip: "Pular tour", previous: "Anterior", next: "Próximo", finish: "Termina", steps: { load_examples: "Importe exemplos para descobrir Scratch4Discord!", run_test: "Teste as funcionalidades do seu bot aqui!", export_code: "Exporte seu código aqui!" } },
                warnings: { login_block: 'O bloco "Conectar ao Discord" na categoria "Base" é obrigatório.' },
                run_modal: {
                    title: "Clique em Iniciar para testar seu bot!",
                    start: "Inicie o bot",
                    stop: "Pare o bot",
                    invalid_token: "Unable to connect to Discord... Maybe the bot's token isn't valid!",
                    error: "Incapaz de conectar ao Discord ... Talvez o token do bot não seja válido!",
                    disabled: "⚠️ Este recurso está disponível apenas usando o aplicativo Scratch For Discord (pegue ele {here})",
                    here: "aqui"
                },
                code_modal: { title: "Código JavaScript do seu bot" }
            },
            no = { applyBlocklyLocale: eo, websiteMessages: to };
        n("f9e3"), n("2dd8"), n("ce8c"), n("2440");
        Ga["c"].add(wa["a"]),
            a["default"].component("font-awesome-icon", Va["a"]),
            a["default"].use(Ua.a),
            a["default"].use(Da.a),
            a["default"].use(ka["a"]),
            a["default"].use(Ba.a),
            a["default"].use(o["a"]),
            a["default"].use(r["a"]),
            (a["default"].config.productionTip = !1),
            (a["default"].config.ignoredElements = ["field", "block", "category", "xml", "mutation", "value", "sep"]);
        var ao = { en: Wa.websiteMessages, fr: Qa.websiteMessages, pt: no.websiteMessages },
            oo = new ka["a"]({ locale: ao[navigator.language.split("-")[0]] ? navigator.language.split("-")[0] : "en", messages: ao });
        a["default"].mixin({
            methods: {
                reloadWorkspace: function () {
                    var e = this.$store.state.workspace,
                        t = c.a.Xml.workspaceToDom(e);
                    e.dispose();
                    var n = c.a.inject(document.getElementById("blocklyDiv"), { renderer: "zelos", theme: Ta["a"], grid: { spacing: 25, length: 3, colour: "#ccc", snap: !0 }, zoom: { controls: !0, startScale: 0.9, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2 }, toolbox: Ae(c.a) });
                    return c.a.Xml.domToWorkspace(t, n), this.$store.commit("setWorkspace", { workspace: n }), e.addChangeListener(c.a.Events.disableOrphans), e;
                },
                setLanguage: function (e) {
                    switch (e) {
                        case "en":
                            c.a.setLocale(Pa.a), Wa.applyBlocklyLocale(), (this.$root.$i18n.locale = "en");
                            break;
                        case "fr":
                            c.a.setLocale(Ya.a), Qa.applyBlocklyLocale(), (this.$root.$i18n.locale = "fr");
                            break;
                        case "pt":
                            c.a.setLocale(ja.a), no.applyBlocklyLocale(), (this.$root.$i18n.locale = "pt");
                            break;
                        default:
                            break;
                    }
                },
                getWorkspaceCode: function () {
                    return this.$store.state.workspace
                        ? "\n                let Discord;\n                let Database;\n                if(typeof window !== \"undefined\"){\n                    Discord = DiscordJS;\n                    Database = EasyDatabase;\n                } else {\n                    Discord = require(\"discord.js\");\n                    Database = require(\"easy-json-database\");\n                }\n                const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));\n                const s4d = {\n                    Discord,\n                    client: null,\n                    tokenInvalid: false,\n                    reply: null,\n                    joiningMember: null,\n                    database: new Database(\"./db.json\"),\n                    checkMessageExists() {\n                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')\n                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')\n                    }\n                };\n                s4d.client = new s4d.Discord.Client({\n                    fetchAllMembers: true\n                });\n                s4d.client.on('raw', async (packet) => {\n                    if(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)){\n                        const guild = s4d.client.guilds.cache.get(packet.d.guild_id);\n                        if(!guild) return;\n                        const member = guild.members.cache.get(packet.d.user_id) || guild.members.fetch(d.user_id).catch(() => {});\n                        if(!member) return;\n                        const channel = s4d.client.channels.cache.get(packet.d.channel_id);\n                        if(!channel) return;\n                        const message = channel.messages.cache.get(packet.d.message_id) || await channel.messages.fetch(packet.d.message_id).catch(() => {});\n                        if(!message) return;\n                        s4d.client.emit(packet.t, guild, channel, message, member, packet.d.emoji.name);\n                    }\n                });\n                ".concat(
                              c.a.JavaScript.workspaceToCode(this.$store.state.workspace),
                              "\n                s4d;\n            "
                          )
                        : "";
                }
            }
        }),
            new a["default"]({
                store: ha,
                render: function (e) {
                    return e(fa);
                },
                i18n: oo
            }).$mount("#app");
    },
    "627b": function (e, t, n) {
        "use strict";
        var a = n("802e"),
            o = n.n(a);
        o.a;
    },
    "7ec4": function (e, t, n) {
        "use strict";
        var a = n("207c"),
            o = n.n(a);
        o.a;
    },
    "802e": function (e, t, n) {},
    "85ec": function (e, t, n) {},
    "904b": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var E_vue_scratch_for_discord_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("53ca"),
            core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d3b7"),
            core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__),
            easy_json_database_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("77fd"),
            easy_json_database_browser__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(easy_json_database_browser__WEBPACK_IMPORTED_MODULE_2__);
        __webpack_exports__["a"] = {
            name: "editmenu",
            data: function () {
                return { botStarted: !1, botStarting: !1, botRawAvatar: null, botTag: null, s4d: null };
            },
            computed: {
                botAvatar: function () {
                    return this.botRawAvatar || "https://cdn.discordapp.com/embed/avatars/2.png";
                },
                electronApp: function () {
                    return (
                        "object" === ("undefined" === typeof navigator ? "undefined" : Object(E_vue_scratch_for_discord_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(navigator)) &&
                        "string" === typeof navigator.userAgent &&
                        navigator.userAgent.indexOf("Electron") >= 0
                    );
                }
            },
            methods: {
                getBotImageStyle: function () {
                    return { "background-size": "50px", "background-image": "url(".concat(this.botAvatar, ")"), width: "50px", height: "50px", "min-height": "50px", "min-width": "50px", "border-radius": "50%" };
                },
                getUsernameSpanClass: function () {
                    return "botname ".concat(this.electronApp ? "" : "unselectable");
                },
                getTooltipContent: function () {
                    return this.botStarted ? this.$t("run_modal.stop") : this.$t("run_modal.start");
                },
                getHandleButtonClass: function () {
                    return { btn: !0, "btn-block": !0, handlebutton: !0, "btn-danger": this.botStarted, "btn-success": !this.botStarted };
                },
                start: function start() {
                    var _this = this,
                        DiscordJS = Discord,
                        EasyDatabase = easy_json_database_browser__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.botStarting = !0;
                    var result = new Promise(function (resolve) {
                        return resolve(eval(_this.getWorkspaceCode()));
                    });
                    result.then(function (e) {
                        setTimeout(function () {
                            e.tokenInvalid
                                ? (console.error(e.tokenError), (_this.botStarting = !1), (_this.botStarted = !1), _this.$toast.open({ message: _this.$t("run_modal.invalid_token"), type: "error", dismissible: !0, duration: 1e4, position: "top-right" }), _this.$bvModal.hide("run-modal"))
                                : e.client.readyTimestamp || ((_this.botStarting = !1), (_this.botStarted = !1), _this.$toast.open({ message: _this.$t("run_modal.error"), type: "error", dismissible: !0, duration: 1e4, position: "top-right" }), _this.$bvModal.hide("run-modal"));
                        }, 5e3),
                            e.client.on("ready", function () {
                                (_this.botStarting = !1), (_this.botStarted = !0), (_this.botRawAvatar = e.client.user.displayAvatarURL()), (_this.botTag = e.client.user.tag);
                            }),
                            e.client.on("shardDisconnect", function () {
                                (_this.botStarted = !1), (_this.s4d = null);
                            }),
                            (_this.s4d = e);
                    });
                },
                stop: function () {
                    this.s4d.client.destroy(), (this.botRawAvatar = null), (this.botTag = null);
                },
                handle: function () {
                    this.botStarted ? this.stop() : this.start();
                },
                onHidden: function () {
                    this.$refs.button.focus();
                }
            }
        };
    },
    a930: function (e, t, n) {},
    cfe4: function (e) {
        e.exports = JSON.parse(
            '{"BASE_BLOCKS":"Blocks de base","REPLY":"répondre %1","MESSAGE_RELATED_BLOCKS":"Blocks relatifs aux messages","INIT_TOOLTIP":"Vous permet d\'utiliser les blocks Discord!","LOGIN":"Connexion à Discord avec le token %1","LOGIN_TOOLTIP":"Connecte votre bot à Discord. Pour trouver le token de votre bot, rendez-vous sur https://discord.com/developers/.","ON_MESSAGE":"Quand un message est reçu","ON_CONNECTED":"Quand le bot est connecté","ON_CONNECTED_TOOLTIP":"Évènement émis lorsque votre bot est connecté à Discord.","MESSAGE_ID":"ID du message","MESSAGE_CONTENT":"contenu du message","MESSAGE_AUTHOR":"auteur du message","MESSAGE_AUTHOR_RAW":"%1 de l\'auteur du message","USERNAME":"nom d\'utilisateur","NICKNAME":"pseudo","GET_GUILD":"trouver le serveur %1 via %2","NAME":"nom","ADD_ROLE":"ajouter le rôle %1 au membre %2","REMOVE_ROLE":"enlever le rôle %1 au membre %2","BAN_MEMBER":"bannir le membre %1","KICK_MEMBER":"expulser le membre %1","SEND_MEMBER":"envoyer %1 au membre %2","MESSAGE_GUILD_RAW":"%1 du serveur du message","MESSAGE_CHANNEL_RAW":"%1 du salon du message","MESSAGE_CHANNEL":"salon du message","MESSAGE_GUILD":"serveur du message","BASIC_BLOCKS":"Blocks basics","ADVANCED_BLOCKS":"Blocks avancés","MENTIONED_MEMBER":"membre mentionné","ADMINISTRATOR":"Administrateur","DETECT_MESSAGES":"Détecter les messages","MESSAGE_ACTIONS":"Actions sur le message","RELATED_TO_MESSAGE_STRINGS":"Chaînes relatives au message","DELETE_MESSAGE":"supprimer le message","RES_ADD_REACTION_MISSING_REACTION":"Vous devez spécifier un émoji valide !","ADD_REACTION":"ajouter la réaction %1 au message","MESSAGE_EMBED":"Message Embed","COLOR":"couleur","TITLE":"titre","MESSAGE":"message","IMAGE":"image","FOOTER":"pied de page","THUMBNAIL":"miniature","PURGE":"dans le salon %1 supprimer %2 messages","RES_PURGE_AMOUNT":"Vous devez préciser un nombre valide de messages à supprimer !","RES_PURGE_CHANNEL":"Vous devez préciser un salon valide !","CHANNEL_MESSAGE_ACTIONS":"Actions sur les messages du salon","TOOLS":"Outils","CHECK_PERMISSIONS":"Vérifier les permissions d\'un membre","MEMBER_HAS_PERMISSION":"le membre %1 a la permission %2","PERM_CREATE_INSTANT_INVITE":"créer une invitation instantanée","PERM_KICK_MEMBERS":"expulser des membres","PERM_BAN_MEMBERS":"bannir des membres","PERM_ADMINISTRATOR":"administrateur","PERM_MANAGE_CHANNELS":"gérer les salons","PERM_MANAGE_GUILD":"gérer le serveur","PERM_ADD_REACTIONS":"ajouter des réactions","PERM_VIEW_AUDIT_LOG":"voir les logs du serveur","PERM_PRIORITY_SPEAKER":"voix prioritaire","PERM_VIEW_CHANNEL":"voir le salon","PERM_READ_MESSAGES":"lire les messages","PERM_SEND_MESSAGES":"envoyer des messages","PERM_SEND_TTS_MESSAGES":"envoyer des messages TTS","PERM_MANAGE_MESSAGES":"gérer les messages","PERM_EMBED_LINKS":"intégrer des liens","PERM_ATTACH_FILES":"attacher des fichiers","PERM_READ_MESSAGE_HISTORY":"voir l\'historique des messages","PERM_MENTION_EVERYONE":"mentionner @everyone","PERM_EXTERNAL_EMOJIS":"voir les émojis externes","PERM_USE_EXTERNAL_EMOJIS":"utiliser des émojis externes","PERM_CONNECT":"se connecter","PERM_SPEAK":"parler","PERM_MUTE_MEMBERS":"couper le micro des membres","PERM_DEAFEN_MEMBERS":"mettre en sourdine des membres","PERM_MOVE_MEMBERS":"déplacer des membres","PERM_USE_VAD":"utiliser la détection de la voix","PERM_CHANGE_NICKNAME":"changer de pseudo","PERM_MANAGE_NICKNAMES":"gérer les pseudos","PERM_MANAGE_ROLES":"gérer les rôles","PERM_MANAGE_WEBHOOKS":"gérer les webhooks","PERM_MANAGE_EMOJIS":"gérer les émojis","JOINS_RELATED_BLOCKS":"Blocks relatifs aux arrivées de membre","DETECT_JOINS":"Détecter les arrivées","ON_MEMBER_JOIN":"Quand un membre rejoint le serveur","JOINING_MEMBER_INFORMATIONS":"Informations sur l\'arrivant","JOINING_MEMBER":"membre arrivant","JOINING_GUILD":"serveur du membre arrivant","RELATED_TO_JOIN_STRINGS":"Chaînes relatives à l\'arrivée","JOINING_MEMBER_RAW":"%1 du membre arrivant","JOINING_GUILD_RAW":"%1 du serveur du membre arrivant","TEMPORARILY":"Temporairement","HOURS":"heures","REASON":"raison","DURING_HOURS":"durant","WITH_REASON":"pour la raison","RES_MUST_BE_IN_ON_MESSAGE":"Ce block ne peut être utilisé que dans un évènement \\"Quand un message est reçu\\"","RES_MISSING_CONTENT":"Vous devez préciser un contenu valide à répondre !","RES_MISSING_MEMBER_HAS_PERMISSION":"Vous devez préciser un membre valide à qui vérifier les permissions !","RES_MUST_BE_IN_ON_MEMBER_JOIN":"Ce block ne peut être utilisé que dans un évènement \\"Quand un membre rejoint le serveur\\"","RES_ADD_ROLE_MISSING_ROLE":"Vous devez préciser un nom ou un identifiant de rôle valide à ajouter !","RES_ADD_ROLE_MISSING_MEMBER":"Vous devez préciser un membre valide à qui ajouter le rôle !","RES_REMOVE_ROLE_MISSING_ROLE":"Vous devez préciser un nom ou un identifiant de rôle valide à enlever !","RES_REMOVE_ROLE_MISSING_MEMBER":"Vous devez préciser un membre valide à qui enlever le rôle !","RES_KICK_MEMBER_MISSING_MEMBER":"Vous devez préciser un membre valide à expulser !","RES_BAN_MEMBER_MISSING_MEMBER":"Vous devez préciser un membre valide à bannir !","RES_SEND_MEMBER_MISSING_MEMBER":"Vous devez préciser un membre valide à qui envoyer le message !","MANDATORY_BLOCKS":"Blocks obligatoires","STARTS_WITH":"%1 commence par %2","REPLACE":"dans le texte %1 remplacer %2 par %3","RES_REPLACE_STRING":"Vous devez préciser un texte à modifier !","RES_REPLACE_REPLACE":"Vous devez préciser ce qu\'il faut remplacer dans le texte !","RES_REPLACE_WITH":"Vous devez préciser ce avec quoi remplacer dans le texte !","INCLUDES":"%1 contient %2","RES_INCLUDES_TEXT":"Vous devez préciser un texte dans lequel chercher !","RES_INCLUDES_INCLUDES":"Vous devez préciser un texte à rechercher !","NEWLINE":"nouvelle ligne","FIND_CHANNEL":"Trouver un salon","SEND_CHANNEL_LABEL":"Envoyer un message dans le salon trouvé","GET_CHANNEL":"obtenir le salon dont le %2 est %1","RES_MISSING_CHANNEL_VALUE":"Vous devez préciser un nom ou un identifiant de salon valide !","RES_SEND_CHANNEL_CONTENT":"Vous devez préciser un contenu à envoyer !","RES_SEND_CHANNEL_CHANNEL":"Vous devez préciser un salon dans lequel envoyer le contenu !","SEND_CHANNEL":"envoyer %1 dans le salon %2","TOOLBOX_LOGIC":"Logique","TOOLBOX_LOOPS":"Boucles","TOOLBOX_MATH":"Math","TOOLBOX_TEXT":"Texte","TOOLBOX_LISTS":"Listes","TOOLBOX_COLORS":"Couleurs","TOOLBOX_VARIABLES":"Variables","TOOLBOX_FUNCTIONS":"Fonctions","TOOLBOX_CHANNELS":"Salons","TOOLBOX_ACTIONS":"Actions","TOOLBOX_BASE":"Base","TOOLBOX_SERVER":"Serveurs","TOOLBOX_ROLES":"Rôles","TOOLBOX_MEMBERS":"Membres","FIND_SERVER":"Trouver un serveur","GET_SERVER":"obtenir le serveur dont le %2 est %1","RES_GET_SERVER_SERVER":"Vous devez préciser un nom ou un identifiant de serveur valide !","LABEL_SERVER_INFOS":"Informations sur le serveur","MEMBER_COUNT":"nombre de membres du serveur %1","RES_VALID_SERVER":"Vous devez préciser un serveur valide !","ICON_URL":"URL de l\'icône du serveur %1","SERVER_NAME":"nom du serveur %1","SERVER_OWNER":"propriétaire du serveur %1","RES_SET_SERVER_NAME_SERVER":"Vous devez préciser un serveur valide à qui changer le nom !","RES_SET_SERVER_NAME_NEW_NICKNAME":"Vous devez préciser un nouveau nom valide pour le serveur !","LABEL_MODIFY_SERVER":"Modifier le serveur","SET_SERVER_NAME":"changer le nom du serveur %1 nouveau nom %2","GET_ROLE_SERVER":"sur le serveur","GET_ROLE":"obtenir le rôle dont le %2 est %1","RES_GET_ROLE_VALUE":"Vous devez préciser un nom ou un identifiant de rôle valide !","RES_GET_SERVER_VALUE":"Vous devez préciser un nom ou un identifiant de serveur valide !","FIND_ROLE":"Trouver un rôle","ROLE_ASSIGNMENT":"Affectation des rôles","RES_GET_MEMBER_VALUE":"Vous devez préciser un nom ou un identifiant de membre valide !","RES_GET_MEMBER_SERVER":"Vous devez préciser un serveur valide sur lequel chercher le membre !","MEMBER_INFORMATIONS":"Informations des membres","RES_VALID_MEMBER":"Vous devez préciser un membre valide !","MEMBER_DISCRIMINATOR":"discriminateur du membre %1","MEMBER_ID":"id du membre %1","MEMBER_TAG":"tag du membre %1","MEMBER_USERNAME":"pseudo du membre %1","MEMBER_IS_BOT":"le membre %1 est un robot","GET_MEMBER":"obtenir le membre dont le %2 est %1 sur le serveur %3","FIND_MEMBER":"Trouver un membre","LABEL_MEMBER_ACTIONS":"Actions sur le membre","LABEL_MESSAGE_CONTEXT":"Contexte du message","SET_MEMBER_NICKNAME":"changer le surnom du membre %1 nouveau surnom %2","RES_SET_MEMBER_NICKNAME_MEMBER":"Vous devez préciser un membre valide à qui changer le surnom !","RES_SET_MEMBER_NICKNAME_NEW_NICKNAME":"Vous devez préciser un nouveau surnom valide pour le membre !","SERVER_BOOST_COUNT":"nombre de boosts du serveur %1","SERVER_BOOST_LEVEL":"niveau de boost du serveur %1","SEND_WAIT_REPLY":"envoyer %1 dans le salon %2 et attendre une réponse du membre %3 pendant (minutes) %4 quand une réponse est reçue %5 si aucune réponse n\'est reçue %6","RES_SEND_WAIT_REPLY_VALUE_PARENT":"Ce block ne peut être utilisé que dans un block \\"Attendre une réponse\\" !","SEND_WAIT_REPLY_VALUE":"réponse du membre","FORMS":"Formulaires","SEND_WAIT_REPLY_EXAMPLE":"Quel est votre prénom ?","REPLY_EXAMPLE":"Salut!","ON_REACT_ADDED":"Quand une réaction est ajoutée","REACT_RELATED_BLOCKS":"Blocks relatifs aux réactions","DETECT_REACT":"Détecter les réactions","REACT_INFORMATIONS":"Information sur la réaction ajoutée/enlevée","REACT_MESSAGE_ID":"ID du message","RES_MUST_BE_IN_ON_REACT":"Ce block ne peut être utilisé que dans un block \\"réaction ajoutée\\" ou \\"réaction enlevée\\" !","REACT_EMOJI":"émoji de la réaction","REACT_MEMBER":"membre réagissant","ON_REACT_REMOVED":"Quand une réaction est enlevée","BOT_PING":"ping du bot","BOT_INFORMATIONS":"Informations about the bot","BOT_ACTIONS":"Actions sur le bot","RES_MISSING_GAME":"Vous devez préciser un jeu pour le bot !","SET_BOT_GAME":"définir le jeu du bot à %1","BOT_SERVER_COUNT":"nombre de serveurs du bot","TOOLBOX_E_JOINS":"Arrivées","TOOLBOX_E_MESSAGES":"Messages","TOOLBOX_E_REACTIONS":"Réactions","TOOLBOX_DATABASE":"Base de données","GET_DATA":"obtenir %1 dans la base de données","LABEL_READ_DB":"Lire la base de données","LABEL_UPDATE_DB":"Modifier la base de données","SET_DATA":"définir %1 à %2 dans la base de données","DELETE_DATA":"supprimer %1 de la base de données","HAS_DATA":"%1 existe dans la base de données","ADD_DATA":"ajouter %1 à %2","SUBTRACT_DATA":"soustraire %1 à %2","DETECT_LEAVES":"Détecter les départs","LEAVING_GUILD":"serveur du membre partant","LEAVING_GUILD_RAW":"%1 du serveur du membre partant","LEAVING_MEMBER_INFORMATIONS":"Informations sur le membre","LEAVES_RELATED_BLOCKS":"Blocks relatifs aux départs de membre","ON_MEMBER_LEAVE":"Quand un membre part d\'un serveur","RELATED_TO_LEAVE_STRINGS":"Chaînes relatives au départ","TOOLBOX_E_LEAVES":"Départs","RES_MUST_BE_IN_ON_MEMBER_LEAVE":"Ce block ne peut être utilisé que dans un évènement \\"Quand un membre part d\'un serveur\\"","LEAVING_MEMBER_RAW":"%1 du membre partant","WAIT_SECONDS":"attendre %1 secondes","TOOLBOX_OTHER":"Autre","RUN_SAVE_OUTPUT":"faire %1 et sauvegarder le résultat dans %2","TOOLBOX_MESSAGES":"Messages","GET_MESSAGE":"obtenir le message dont l\'ID est %1 dans le salon %2","RES_GET_MESSAGE_CHANNEL":"Vous devez préciser un salon valide sur lequel chercher le message!","RES_GET_MESSAGE_VALUE":"Vous devez préciser un identifiant de message valide!","FIND_MESSAGE":"Trouver le message","MESSAGE_INFORMATIONS":"Informations sur le message","CURRENT":"%1 actuelle","HOUR":"heure","MINUTE":"minute","MONTH":"mois","DAY_OF_WEEK":"jour de la semaine","SECOND":"seconde","DATE":"date","FOREVER":"répéter indéfiniement %1 faire %2","YES":"oui","NO":"non","CREATE_CHANNEL":"créer un salon avec comme nom %1 sur le serveur %2 de type %3","CHANNEL_ACTIONS":"Actions sur le salon","TEXT":"textuel","VOICE":"vocal","CATEGORY":"catégorie"}'
        );
    },
    e0e1: function (e) {
        e.exports = JSON.parse(
            '{"BASE_BLOCKS":"Base blocks","MESSAGE_RELATED_BLOCKS":"Blocks related to messages","REPLY":"reply %1","LOGIN":"Connect to Discord with the token %1","LOGIN_TOOLTIP":"Connect your bot to Discord. To get your bot token, go to https://discord.com/developers/.","ON_MESSAGE":"When a message is received","ON_CONNECTED":"When the bot is connected","ON_CONNECTED_TOOLTIP":"Event emitted when your bot is connected to Discord.","MESSAGE_ID":"message ID","MESSAGE_CONTENT":"message content","MESSAGE_AUTHOR":"message author","MESSAGE_AUTHOR_RAW":"%1 of the message author","USERNAME":"username","NICKNAME":"nickname","GET_GUILD":"find server %1 using %2","NAME":"name","ADD_ROLE":"add role %1 to member %2","REMOVE_ROLE":"remove role %1 from member %2","BAN_MEMBER":"ban member %1","KICK_MEMBER":"kick member %1","SEND_MEMBER":"send %1 to member %2","MESSAGE_GUILD":"message server","MESSAGE_CHANNEL":"message channel","BASIC_BLOCKS":"Basic blocks","ADVANCED_BLOCKS":"Advanced blocks","MENTIONED_MEMBER":"mentioned member","ADMINISTRATOR":"Administrator","DETECT_MESSAGES":"Detect messages","MESSAGE_ACTIONS":"Actions on the message","RELATED_TO_MESSAGE_STRINGS":"Strings related to the message","DELETE_MESSAGE":"delete the message","RES_ADD_REACTION_MISSING_REACTION":"You must specify a valid emoji !","ADD_REACTION":"add reaction %1 to the message","MESSAGE_EMBED":"Message Embed","COLOR":"color","TITLE":"title","MESSAGE":"message","IMAGE":"image","FOOTER":"footer","THUMBNAIL":"thumbnail","PURGE":"in channel %1 purge %2 messages","RES_PURGE_AMOUNT":"You must specify a valid amount of messages to purge!","RES_PURGE_CHANNEL":"You must specify a valid channel!","CHANNEL_MESSAGE_ACTIONS":"Action in the messages of channel","TOOLS":"Tools","CHECK_PERMISSIONS":"Check member permissions","MEMBER_HAS_PERMISSION":"the member %1 has permission %2","PERM_CREATE_INSTANT_INVITE":"create instant invites","PERM_KICK_MEMBERS":"kick members","PERM_BAN_MEMBERS":"ban members","PERM_ADMINISTRATOR":"administrator","PERM_MANAGE_CHANNELS":"manage channels","PERM_MANAGE_GUILD":"manage server","PERM_ADD_REACTIONS":"add reactions","PERM_VIEW_AUDIT_LOG":"view audit logs","PERM_PRIORITY_SPEAKER":"priority-speaker","PERM_VIEW_CHANNEL":"view channel","PERM_READ_MESSAGES":"read messages","PERM_SEND_MESSAGES":"send messages","PERM_SEND_TTS_MESSAGES":"send TTS messages","PERM_MANAGE_MESSAGES":"manage messages","PERM_EMBED_LINKS":"embed links","PERM_ATTACH_FILES":"attach files","PERM_READ_MESSAGE_HISTORY":"read message history","PERM_MENTION_EVERYONE":"mention @everyone","PERM_EXTERNAL_EMOJIS":"view external emojis","PERM_USE_EXTERNAL_EMOJIS":"use external emojis","PERM_CONNECT":"connect","PERM_SPEAK":"speak","PERM_MUTE_MEMBERS":"mute members","PERM_DEAFEN_MEMBERS":"deafen members","PERM_MOVE_MEMBERS":"move members","PERM_USE_VAD":"use voice activity","PERM_CHANGE_NICKNAME":"change nickname","PERM_MANAGE_NICKNAMES":"manage nicknames","PERM_MANAGE_ROLES":"manage roles","PERM_MANAGE_WEBHOOKS":"manage webhooks","PERM_MANAGE_EMOJIS":"manage emojis","JOINS_RELATED_BLOCKS":"Blocks related to member joins","DETECT_JOINS":"Detect joins","ON_MEMBER_JOIN":"When a member joins a server","JOINING_MEMBER_INFORMATIONS":"Informations about the member","JOINING_MEMBER":"joining member","RELATED_TO_JOIN_STRINGS":"Strings related to join","JOINING_MEMBER_RAW":"%1 of the joining member","JOINING_GUILD":"joining member server","TEMPORARILY":"Temporarily","HOURS":"hours","REASON":"reason","DURING_HOURS":"during","WITH_REASON":"for the reason","RES_MUST_BE_IN_ON_MESSAGE":"This block may only be used in a \\"When a message is received\\" event","RES_MISSING_CONTENT":"You must specify a valid content to reply!","RES_MISSING_MEMBER_HAS_PERMISSION":"You must specify a valid member to check permissions!","RES_MUST_BE_IN_ON_MEMBER_JOIN":"This block may only be used in a \\"When a member joins a server\\" event","RES_ADD_ROLE_MISSING_ROLE":"You must specify a valid name or role ID to add!","RES_ADD_ROLE_MISSING_MEMBER":"You must specify a valid member to add the role to!","RES_REMOVE_ROLE_MISSING_ROLE":"You must specify a valid name or role ID to remove!","RES_REMOVE_ROLE_MISSING_MEMBER":"You must specify a valid member to remove the role!","RES_KICK_MEMBER_MISSING_MEMBER":"You must specify a valid member to be kicked!","RES_BAN_MEMBER_MISSING_MEMBER":"You must specify a valid member to be banned!","RES_SEND_MEMBER_MISSING_MEMBER":"You must specify a valid member to send the message to!","MANDATORY_BLOCKS":"Mandatory blocks","STARTS_WITH":"%1 starts with %2","REPLACE":"in text %1 replace %2 with %3","RES_REPLACE_STRING":"You must specify a text to replace!","RES_REPLACE_REPLACE":"You must specify what to replace in the text!","RES_REPLACE_WITH":"You must specify the new value to replace!","INCLUDES":"%1 includes %2","RES_INCLUDES_TEXT":"You must specify a text to see if that includes something!","RES_INCLUDES_INCLUDES":"You must specify a text to see if in the other text includes that!","NEWLINE":"new line","FIND_CHANNEL":"Find a channel","SEND_CHANNEL_LABEL":"Send a message in the found channel","GET_CHANNEL":"get the channel with %2 equal to %1","RES_MISSING_CHANNEL_VALUE":"You must specify a valid channel name or ID!","RES_SEND_CHANNEL_CONTENT":"You must specify a content to send!","RES_SEND_CHANNEL_CHANNEL":"You must specify a channel in which to send the content!","SEND_CHANNEL":"send %1 in the channel %2","TOOLBOX_LOGIC":"Logic","TOOLBOX_LOOPS":"Loops","TOOLBOX_MATH":"Math","TOOLBOX_TEXT":"Text","TOOLBOX_LISTS":"Lists","TOOLBOX_COLORS":"Colors","TOOLBOX_VARIABLES":"Variables","TOOLBOX_FUNCTIONS":"Functions","TOOLBOX_CHANNELS":"Channels","TOOLBOX_ACTIONS":"Actions","TOOLBOX_BASE":"Base","TOOLBOX_SERVER":"Servers","TOOLBOX_ROLES":"Roles","FIND_SERVER":"Find a server","GET_SERVER":"get the server with %2 equal to %1","RES_GET_SERVER_SERVER":"You must specify a valid server name or ID!","LABEL_SERVER_INFOS":"Informations about the server","MEMBER_COUNT":"number of members of server %1","RES_VALID_SERVER":"You must specify a valid server!","ICON_URL":"icon url of server %1","SERVER_NAME":"name of server %1","SERVER_OWNER":"owner of server %1","RES_SET_SERVER_NAME_SERVER":"You must specify a valid server to change the name!","RES_SET_SERVER_NAME_NEW_NICKNAME":"You must specify a new valid name for the server!","LABEL_MODIFY_SERVER":"Modify the server","SET_SERVER_NAME":"change name of server %1 new name %2","GET_ROLE_SERVER":"on the server","GET_ROLE":"get role with %2 equal to %1","RES_GET_ROLE_VALUE":"You must specify a valid name or role ID!","RES_GET_SERVER_VALUE":"You must specify a valid server name or ID!","FIND_ROLE":"Find a role","ROLE_ASSIGNMENT":"Roles assignment","FIND_MEMBER":"Find a member","GET_MEMBER":"get member with %2 equal to %1 on server %3","INIT_TOOLTIP":"Allows you to use Discord blocks!","JOINING_GUILD_RAW":"%1 of the server of the joining member","LABEL_MEMBER_ACTIONS":"Actions on the member","LABEL_MESSAGE_CONTEXT":"Message context","MESSAGE_CHANNEL_RAW":"%1 of the channel of the message","MESSAGE_GUILD_RAW":"%1 of the server of the message","RES_GET_MEMBER_SERVER":"You must specify a valid server on which the member is!","RES_GET_MEMBER_VALUE":"You must specify a valid member ID or member name!","TOOLBOX_MEMBERS":"Member","MEMBER_INFORMATIONS":"Members informations","RES_VALID_MEMBER":"You must specify a valid member !","MEMBER_DISCRIMINATOR":"discriminator of member %1","MEMBER_ID":"id of member %1","MEMBER_TAG":"tag of member %1","MEMBER_USERNAME":"username of member %1","MEMBER_IS_BOT":"member %1 is a bot","SET_MEMBER_NICKNAME":"change nickname of member %1 new nickname %2","RES_SET_MEMBER_NICKNAME_MEMBER":"You must specify a valid member to change nicknam","RES_SET_MEMBER_NICKNAME_NEW_NICKNAME":"You must specify a valid new nickname for the member!","SERVER_BOOST_COUNT":"number of boosts of server %1","SERVER_BOOST_LEVEL":"boost level of server %1","SEND_WAIT_REPLY":"send %1 in the channel %2 and wait for an answer from member %3 during (minutes) %4 when an answer is received %5 if no answer is received %6","RES_SEND_WAIT_REPLY_VALUE_PARENT":"This block can only be used in a \\"Wait for an answer\\" bl!","SEND_WAIT_REPLY_VALUE":"answer of member","FORMS":"Forms","SEND_WAIT_REPLY_EXAMPLE":"What is your name?","REPLY_EXAMPLE":"Hey!","ON_REACT_ADDED":"When a reaction is added","REACT_RELATED_BLOCKS":"Blocks related to reactions","DETECT_REACT":"I\'m writigni\'m writign","REACT_INFORMATIONS":"Informations about the added/removed reaction","REACT_MESSAGE_ID":"reaction message ID","RES_MUST_BE_IN_ON_REACT":"This block can only be used in a \\"reaction added\\" block or a \\"reaction removed\\" block!","REACT_EMOJI":"emoji of the reaction","REACT_MEMBER":"reacting member","ON_REACT_REMOVED":"When a reaction is removed","BOT_PING":"bot ping","BOT_INFORMATIONS":"Bot Informations","BOT_ACTIONS":"Actions on the bot","RES_MISSING_GAME":"You must specify a game for the bot!","SET_BOT_GAME":"set bot game to %1","BOT_SERVER_COUNT":"bot server count","TOOLBOX_E_JOINS":"Joins","TOOLBOX_E_MESSAGES":"Messages","TOOLBOX_E_REACTIONS":"Reactions","TOOLBOX_DATABASE":"Database","GET_DATA":"get %1 from the database","LABEL_READ_DB":"Read database","LABEL_UPDATE_DB":"Update database","SET_DATA":"set %1 to %2 in database","DELETE_DATA":"delete %1 from database","HAS_DATA":"%1 exists in database","ADD_DATA":"add %1 to %2","SUBTRACT_DATA":"subtract %1 from %2","DETECT_LEAVES":"Detect leaves","LEAVING_GUILD":"leaving member server","LEAVING_GUILD_RAW":"%1 of the server of the leaving member","LEAVING_MEMBER_INFORMATIONS":"Informations about the member","LEAVES_RELATED_BLOCKS":"Blocks related to member leaves","ON_MEMBER_LEAVE":"When a member leaves a server","RELATED_TO_LEAVE_STRINGS":"Strings related to leave","TOOLBOX_E_LEAVES":"Leaves","RES_MUST_BE_IN_ON_MEMBER_LEAVE":"This block may only be used in a \\"When a member leaves a server\\" event","LEAVING_MEMBER_RAW":"%1 of the leaving member","WAIT_SECONDS":"wait %1 seconds","TOOLBOX_OTHER":"Other","RUN_SAVE_OUTPUT":"do %1 and save output in %2","TOOLBOX_MESSAGES":"Messages","GET_MESSAGE":"get message with ID equal to %1 in channel %2","RES_GET_MESSAGE_CHANNEL":"You must specify a valid channel on which the message is!","RES_GET_MESSAGE_VALUE":"You must specify a valid message ID!","FIND_MESSAGE":"Find the message","MESSAGE_INFORMATIONS":"Informations about the message","CURRENT":"current %1","HOUR":"hour","MINUTE":"minute","MONTH":"month","DAY_OF_WEEK":"day of week","SECOND":"second","DATE":"date","FOREVER":"repeat forever %1 do %2","YES":"yes","NO":"no","CREATE_CHANNEL":"create channel with name %1 on server %2 of type %3","CHANNEL_ACTIONS":"Actions for the channel","TEXT":"text","VOICE":"voice","CATEGORY":"category"}'
        );
    }
});
//# sourceMappingURL=app.3d56fdd3.js.map
