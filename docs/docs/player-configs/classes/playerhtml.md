[@rumblestudio/player-configs](./player-configs/README.md) / [Exports](./player-configs/modules.md) / PlayerHTML

# Class: PlayerHTML

Class representing an object called playerHTML will be used
to subscribe to player-service events through DOM.
This class inherits HTMLElement base class

## Hierarchy

- `HTMLElement`

  ↳ **PlayerHTML**

## Table of contents

### Constructors

- [constructor](./player-configs/classes/playerhtml.md#constructor)

### Properties

- [ATTRIBUTE\_NODE](./player-configs/classes/playerhtml.md#attribute_node)
- [CDATA\_SECTION\_NODE](./player-configs/classes/playerhtml.md#cdata_section_node)
- [COMMENT\_NODE](./player-configs/classes/playerhtml.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](./player-configs/classes/playerhtml.md#document_fragment_node)
- [DOCUMENT\_NODE](./player-configs/classes/playerhtml.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](./player-configs/classes/playerhtml.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](./player-configs/classes/playerhtml.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](./player-configs/classes/playerhtml.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](./player-configs/classes/playerhtml.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](./player-configs/classes/playerhtml.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](./player-configs/classes/playerhtml.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](./player-configs/classes/playerhtml.md#document_type_node)
- [ELEMENT\_NODE](./player-configs/classes/playerhtml.md#element_node)
- [ENTITY\_NODE](./player-configs/classes/playerhtml.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](./player-configs/classes/playerhtml.md#entity_reference_node)
- [NOTATION\_NODE](./player-configs/classes/playerhtml.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](./player-configs/classes/playerhtml.md#processing_instruction_node)
- [TEXT\_NODE](./player-configs/classes/playerhtml.md#text_node)
- [accessKey](./player-configs/classes/playerhtml.md#accesskey)
- [accessKeyLabel](./player-configs/classes/playerhtml.md#accesskeylabel)
- [assignedSlot](./player-configs/classes/playerhtml.md#assignedslot)
- [attributes](./player-configs/classes/playerhtml.md#attributes)
- [autocapitalize](./player-configs/classes/playerhtml.md#autocapitalize)
- [autofocus](./player-configs/classes/playerhtml.md#autofocus)
- [baseURI](./player-configs/classes/playerhtml.md#baseuri)
- [childElementCount](./player-configs/classes/playerhtml.md#childelementcount)
- [childNodes](./player-configs/classes/playerhtml.md#childnodes)
- [children](./player-configs/classes/playerhtml.md#children)
- [classList](./player-configs/classes/playerhtml.md#classlist)
- [className](./player-configs/classes/playerhtml.md#classname)
- [clientHeight](./player-configs/classes/playerhtml.md#clientheight)
- [clientLeft](./player-configs/classes/playerhtml.md#clientleft)
- [clientTop](./player-configs/classes/playerhtml.md#clienttop)
- [clientWidth](./player-configs/classes/playerhtml.md#clientwidth)
- [contentEditable](./player-configs/classes/playerhtml.md#contenteditable)
- [dataset](./player-configs/classes/playerhtml.md#dataset)
- [dir](./player-configs/classes/playerhtml.md#dir)
- [draggable](./player-configs/classes/playerhtml.md#draggable)
- [enterKeyHint](./player-configs/classes/playerhtml.md#enterkeyhint)
- [firstChild](./player-configs/classes/playerhtml.md#firstchild)
- [firstElementChild](./player-configs/classes/playerhtml.md#firstelementchild)
- [hidden](./player-configs/classes/playerhtml.md#hidden)
- [id](./player-configs/classes/playerhtml.md#id)
- [innerHTML](./player-configs/classes/playerhtml.md#innerhtml)
- [innerText](./player-configs/classes/playerhtml.md#innertext)
- [inputMode](./player-configs/classes/playerhtml.md#inputmode)
- [isConnected](./player-configs/classes/playerhtml.md#isconnected)
- [isContentEditable](./player-configs/classes/playerhtml.md#iscontenteditable)
- [lang](./player-configs/classes/playerhtml.md#lang)
- [lastChild](./player-configs/classes/playerhtml.md#lastchild)
- [lastElementChild](./player-configs/classes/playerhtml.md#lastelementchild)
- [localName](./player-configs/classes/playerhtml.md#localname)
- [namespaceURI](./player-configs/classes/playerhtml.md#namespaceuri)
- [nextElementSibling](./player-configs/classes/playerhtml.md#nextelementsibling)
- [nextSibling](./player-configs/classes/playerhtml.md#nextsibling)
- [nodeName](./player-configs/classes/playerhtml.md#nodename)
- [nodeType](./player-configs/classes/playerhtml.md#nodetype)
- [nodeValue](./player-configs/classes/playerhtml.md#nodevalue)
- [nonce](./player-configs/classes/playerhtml.md#nonce)
- [offsetHeight](./player-configs/classes/playerhtml.md#offsetheight)
- [offsetLeft](./player-configs/classes/playerhtml.md#offsetleft)
- [offsetParent](./player-configs/classes/playerhtml.md#offsetparent)
- [offsetTop](./player-configs/classes/playerhtml.md#offsettop)
- [offsetWidth](./player-configs/classes/playerhtml.md#offsetwidth)
- [onabort](./player-configs/classes/playerhtml.md#onabort)
- [onanimationcancel](./player-configs/classes/playerhtml.md#onanimationcancel)
- [onanimationend](./player-configs/classes/playerhtml.md#onanimationend)
- [onanimationiteration](./player-configs/classes/playerhtml.md#onanimationiteration)
- [onanimationstart](./player-configs/classes/playerhtml.md#onanimationstart)
- [onauxclick](./player-configs/classes/playerhtml.md#onauxclick)
- [onblur](./player-configs/classes/playerhtml.md#onblur)
- [oncancel](./player-configs/classes/playerhtml.md#oncancel)
- [oncanplay](./player-configs/classes/playerhtml.md#oncanplay)
- [oncanplaythrough](./player-configs/classes/playerhtml.md#oncanplaythrough)
- [onchange](./player-configs/classes/playerhtml.md#onchange)
- [onclick](./player-configs/classes/playerhtml.md#onclick)
- [onclose](./player-configs/classes/playerhtml.md#onclose)
- [oncontextmenu](./player-configs/classes/playerhtml.md#oncontextmenu)
- [oncopy](./player-configs/classes/playerhtml.md#oncopy)
- [oncuechange](./player-configs/classes/playerhtml.md#oncuechange)
- [oncut](./player-configs/classes/playerhtml.md#oncut)
- [ondblclick](./player-configs/classes/playerhtml.md#ondblclick)
- [ondrag](./player-configs/classes/playerhtml.md#ondrag)
- [ondragend](./player-configs/classes/playerhtml.md#ondragend)
- [ondragenter](./player-configs/classes/playerhtml.md#ondragenter)
- [ondragexit](./player-configs/classes/playerhtml.md#ondragexit)
- [ondragleave](./player-configs/classes/playerhtml.md#ondragleave)
- [ondragover](./player-configs/classes/playerhtml.md#ondragover)
- [ondragstart](./player-configs/classes/playerhtml.md#ondragstart)
- [ondrop](./player-configs/classes/playerhtml.md#ondrop)
- [ondurationchange](./player-configs/classes/playerhtml.md#ondurationchange)
- [onemptied](./player-configs/classes/playerhtml.md#onemptied)
- [onended](./player-configs/classes/playerhtml.md#onended)
- [onerror](./player-configs/classes/playerhtml.md#onerror)
- [onfocus](./player-configs/classes/playerhtml.md#onfocus)
- [onfullscreenchange](./player-configs/classes/playerhtml.md#onfullscreenchange)
- [onfullscreenerror](./player-configs/classes/playerhtml.md#onfullscreenerror)
- [ongotpointercapture](./player-configs/classes/playerhtml.md#ongotpointercapture)
- [oninput](./player-configs/classes/playerhtml.md#oninput)
- [oninvalid](./player-configs/classes/playerhtml.md#oninvalid)
- [onkeydown](./player-configs/classes/playerhtml.md#onkeydown)
- [onkeypress](./player-configs/classes/playerhtml.md#onkeypress)
- [onkeyup](./player-configs/classes/playerhtml.md#onkeyup)
- [onload](./player-configs/classes/playerhtml.md#onload)
- [onloadeddata](./player-configs/classes/playerhtml.md#onloadeddata)
- [onloadedmetadata](./player-configs/classes/playerhtml.md#onloadedmetadata)
- [onloadstart](./player-configs/classes/playerhtml.md#onloadstart)
- [onlostpointercapture](./player-configs/classes/playerhtml.md#onlostpointercapture)
- [onmousedown](./player-configs/classes/playerhtml.md#onmousedown)
- [onmouseenter](./player-configs/classes/playerhtml.md#onmouseenter)
- [onmouseleave](./player-configs/classes/playerhtml.md#onmouseleave)
- [onmousemove](./player-configs/classes/playerhtml.md#onmousemove)
- [onmouseout](./player-configs/classes/playerhtml.md#onmouseout)
- [onmouseover](./player-configs/classes/playerhtml.md#onmouseover)
- [onmouseup](./player-configs/classes/playerhtml.md#onmouseup)
- [onpaste](./player-configs/classes/playerhtml.md#onpaste)
- [onpause](./player-configs/classes/playerhtml.md#onpause)
- [onplay](./player-configs/classes/playerhtml.md#onplay)
- [onplaying](./player-configs/classes/playerhtml.md#onplaying)
- [onpointercancel](./player-configs/classes/playerhtml.md#onpointercancel)
- [onpointerdown](./player-configs/classes/playerhtml.md#onpointerdown)
- [onpointerenter](./player-configs/classes/playerhtml.md#onpointerenter)
- [onpointerleave](./player-configs/classes/playerhtml.md#onpointerleave)
- [onpointermove](./player-configs/classes/playerhtml.md#onpointermove)
- [onpointerout](./player-configs/classes/playerhtml.md#onpointerout)
- [onpointerover](./player-configs/classes/playerhtml.md#onpointerover)
- [onpointerup](./player-configs/classes/playerhtml.md#onpointerup)
- [onprogress](./player-configs/classes/playerhtml.md#onprogress)
- [onratechange](./player-configs/classes/playerhtml.md#onratechange)
- [onreset](./player-configs/classes/playerhtml.md#onreset)
- [onresize](./player-configs/classes/playerhtml.md#onresize)
- [onscroll](./player-configs/classes/playerhtml.md#onscroll)
- [onsecuritypolicyviolation](./player-configs/classes/playerhtml.md#onsecuritypolicyviolation)
- [onseeked](./player-configs/classes/playerhtml.md#onseeked)
- [onseeking](./player-configs/classes/playerhtml.md#onseeking)
- [onselect](./player-configs/classes/playerhtml.md#onselect)
- [onselectionchange](./player-configs/classes/playerhtml.md#onselectionchange)
- [onselectstart](./player-configs/classes/playerhtml.md#onselectstart)
- [onstalled](./player-configs/classes/playerhtml.md#onstalled)
- [onsubmit](./player-configs/classes/playerhtml.md#onsubmit)
- [onsuspend](./player-configs/classes/playerhtml.md#onsuspend)
- [ontimeupdate](./player-configs/classes/playerhtml.md#ontimeupdate)
- [ontoggle](./player-configs/classes/playerhtml.md#ontoggle)
- [ontouchcancel](./player-configs/classes/playerhtml.md#ontouchcancel)
- [ontouchend](./player-configs/classes/playerhtml.md#ontouchend)
- [ontouchmove](./player-configs/classes/playerhtml.md#ontouchmove)
- [ontouchstart](./player-configs/classes/playerhtml.md#ontouchstart)
- [ontransitioncancel](./player-configs/classes/playerhtml.md#ontransitioncancel)
- [ontransitionend](./player-configs/classes/playerhtml.md#ontransitionend)
- [ontransitionrun](./player-configs/classes/playerhtml.md#ontransitionrun)
- [ontransitionstart](./player-configs/classes/playerhtml.md#ontransitionstart)
- [onvolumechange](./player-configs/classes/playerhtml.md#onvolumechange)
- [onwaiting](./player-configs/classes/playerhtml.md#onwaiting)
- [onwheel](./player-configs/classes/playerhtml.md#onwheel)
- [outerHTML](./player-configs/classes/playerhtml.md#outerhtml)
- [ownerDocument](./player-configs/classes/playerhtml.md#ownerdocument)
- [parentElement](./player-configs/classes/playerhtml.md#parentelement)
- [parentNode](./player-configs/classes/playerhtml.md#parentnode)
- [playerService](./player-configs/classes/playerhtml.md#playerservice)
- [prefix](./player-configs/classes/playerhtml.md#prefix)
- [previousElementSibling](./player-configs/classes/playerhtml.md#previouselementsibling)
- [previousSibling](./player-configs/classes/playerhtml.md#previoussibling)
- [scrollHeight](./player-configs/classes/playerhtml.md#scrollheight)
- [scrollLeft](./player-configs/classes/playerhtml.md#scrollleft)
- [scrollTop](./player-configs/classes/playerhtml.md#scrolltop)
- [scrollWidth](./player-configs/classes/playerhtml.md#scrollwidth)
- [shadowRoot](./player-configs/classes/playerhtml.md#shadowroot)
- [slot](./player-configs/classes/playerhtml.md#slot)
- [spellcheck](./player-configs/classes/playerhtml.md#spellcheck)
- [style](./player-configs/classes/playerhtml.md#style)
- [tabIndex](./player-configs/classes/playerhtml.md#tabindex)
- [tagName](./player-configs/classes/playerhtml.md#tagname)
- [textContent](./player-configs/classes/playerhtml.md#textcontent)
- [title](./player-configs/classes/playerhtml.md#title)
- [translate](./player-configs/classes/playerhtml.md#translate)

### Accessors

- [index](./player-configs/classes/playerhtml.md#index)
- [percentage](./player-configs/classes/playerhtml.md#percentage)
- [playlist](./player-configs/classes/playerhtml.md#playlist)
- [position](./player-configs/classes/playerhtml.md#position)

### Methods

- [addEventListener](./player-configs/classes/playerhtml.md#addeventlistener)
- [after](./player-configs/classes/playerhtml.md#after)
- [animate](./player-configs/classes/playerhtml.md#animate)
- [append](./player-configs/classes/playerhtml.md#append)
- [appendChild](./player-configs/classes/playerhtml.md#appendchild)
- [attachShadow](./player-configs/classes/playerhtml.md#attachshadow)
- [before](./player-configs/classes/playerhtml.md#before)
- [blur](./player-configs/classes/playerhtml.md#blur)
- [click](./player-configs/classes/playerhtml.md#click)
- [cloneNode](./player-configs/classes/playerhtml.md#clonenode)
- [closest](./player-configs/classes/playerhtml.md#closest)
- [compareDocumentPosition](./player-configs/classes/playerhtml.md#comparedocumentposition)
- [contains](./player-configs/classes/playerhtml.md#contains)
- [dispatchEvent](./player-configs/classes/playerhtml.md#dispatchevent)
- [eventsDispatcher](./player-configs/classes/playerhtml.md#eventsdispatcher)
- [focus](./player-configs/classes/playerhtml.md#focus)
- [getAnimations](./player-configs/classes/playerhtml.md#getanimations)
- [getAttribute](./player-configs/classes/playerhtml.md#getattribute)
- [getAttributeNS](./player-configs/classes/playerhtml.md#getattributens)
- [getAttributeNames](./player-configs/classes/playerhtml.md#getattributenames)
- [getAttributeNode](./player-configs/classes/playerhtml.md#getattributenode)
- [getAttributeNodeNS](./player-configs/classes/playerhtml.md#getattributenodens)
- [getBoundingClientRect](./player-configs/classes/playerhtml.md#getboundingclientrect)
- [getClientRects](./player-configs/classes/playerhtml.md#getclientrects)
- [getElementsByClassName](./player-configs/classes/playerhtml.md#getelementsbyclassname)
- [getElementsByTagName](./player-configs/classes/playerhtml.md#getelementsbytagname)
- [getElementsByTagNameNS](./player-configs/classes/playerhtml.md#getelementsbytagnamens)
- [getRootNode](./player-configs/classes/playerhtml.md#getrootnode)
- [getSongTimeLeft](./player-configs/classes/playerhtml.md#getsongtimeleft)
- [getSongTotalTime](./player-configs/classes/playerhtml.md#getsongtotaltime)
- [hasAttribute](./player-configs/classes/playerhtml.md#hasattribute)
- [hasAttributeNS](./player-configs/classes/playerhtml.md#hasattributens)
- [hasAttributes](./player-configs/classes/playerhtml.md#hasattributes)
- [hasChildNodes](./player-configs/classes/playerhtml.md#haschildnodes)
- [hasPointerCapture](./player-configs/classes/playerhtml.md#haspointercapture)
- [insertAdjacentElement](./player-configs/classes/playerhtml.md#insertadjacentelement)
- [insertAdjacentHTML](./player-configs/classes/playerhtml.md#insertadjacenthtml)
- [insertAdjacentText](./player-configs/classes/playerhtml.md#insertadjacenttext)
- [insertBefore](./player-configs/classes/playerhtml.md#insertbefore)
- [isDefaultNamespace](./player-configs/classes/playerhtml.md#isdefaultnamespace)
- [isEqualNode](./player-configs/classes/playerhtml.md#isequalnode)
- [isSameNode](./player-configs/classes/playerhtml.md#issamenode)
- [lookupNamespaceURI](./player-configs/classes/playerhtml.md#lookupnamespaceuri)
- [lookupPrefix](./player-configs/classes/playerhtml.md#lookupprefix)
- [matches](./player-configs/classes/playerhtml.md#matches)
- [msGetRegionContent](./player-configs/classes/playerhtml.md#msgetregioncontent)
- [next](./player-configs/classes/playerhtml.md#next)
- [normalize](./player-configs/classes/playerhtml.md#normalize)
- [pause](./player-configs/classes/playerhtml.md#pause)
- [play](./player-configs/classes/playerhtml.md#play)
- [prepend](./player-configs/classes/playerhtml.md#prepend)
- [prev](./player-configs/classes/playerhtml.md#prev)
- [querySelector](./player-configs/classes/playerhtml.md#queryselector)
- [querySelectorAll](./player-configs/classes/playerhtml.md#queryselectorall)
- [releasePointerCapture](./player-configs/classes/playerhtml.md#releasepointercapture)
- [remove](./player-configs/classes/playerhtml.md#remove)
- [removeAttribute](./player-configs/classes/playerhtml.md#removeattribute)
- [removeAttributeNS](./player-configs/classes/playerhtml.md#removeattributens)
- [removeAttributeNode](./player-configs/classes/playerhtml.md#removeattributenode)
- [removeChild](./player-configs/classes/playerhtml.md#removechild)
- [removeEventListener](./player-configs/classes/playerhtml.md#removeeventlistener)
- [replaceChild](./player-configs/classes/playerhtml.md#replacechild)
- [replaceWith](./player-configs/classes/playerhtml.md#replacewith)
- [requestFullscreen](./player-configs/classes/playerhtml.md#requestfullscreen)
- [requestPointerLock](./player-configs/classes/playerhtml.md#requestpointerlock)
- [scroll](./player-configs/classes/playerhtml.md#scroll)
- [scrollBy](./player-configs/classes/playerhtml.md#scrollby)
- [scrollIntoView](./player-configs/classes/playerhtml.md#scrollintoview)
- [scrollTo](./player-configs/classes/playerhtml.md#scrollto)
- [seekForJump](./player-configs/classes/playerhtml.md#seekforjump)
- [seekPerPercentage](./player-configs/classes/playerhtml.md#seekperpercentage)
- [seekPerPercentageAndIndex](./player-configs/classes/playerhtml.md#seekperpercentageandindex)
- [seekPerPosition](./player-configs/classes/playerhtml.md#seekperposition)
- [setAttribute](./player-configs/classes/playerhtml.md#setattribute)
- [setAttributeNS](./player-configs/classes/playerhtml.md#setattributens)
- [setAttributeNode](./player-configs/classes/playerhtml.md#setattributenode)
- [setAttributeNodeNS](./player-configs/classes/playerhtml.md#setattributenodens)
- [setPlayerService](./player-configs/classes/playerhtml.md#setplayerservice)
- [setPointerCapture](./player-configs/classes/playerhtml.md#setpointercapture)
- [stop](./player-configs/classes/playerhtml.md#stop)
- [toggleAttribute](./player-configs/classes/playerhtml.md#toggleattribute)
- [webkitMatchesSelector](./player-configs/classes/playerhtml.md#webkitmatchesselector)

## Constructors

### constructor

• **new PlayerHTML**(`playerService?`)

Create the instances of playerHTML

#### Parameters

| Name | Type |
| :------ | :------ |
| `playerService?` | `PlayerService` |

#### Overrides

HTMLElement.constructor

#### Defined in

[src/lib/elements/playerHTML.ts:54](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L54)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

HTMLElement.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10933

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

HTMLElement.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10937

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

HTMLElement.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10941

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

HTMLElement.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10945

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

HTMLElement.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10949

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

HTMLElement.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10953

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

HTMLElement.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10957

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

HTMLElement.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10961

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

HTMLElement.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10965

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

HTMLElement.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10966

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

HTMLElement.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10970

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

HTMLElement.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10974

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

HTMLElement.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10978

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

HTMLElement.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10979

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

HTMLElement.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10980

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

HTMLElement.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10981

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

HTMLElement.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10985

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

HTMLElement.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10989

___

### accessKey

• **accessKey**: `string`

#### Inherited from

HTMLElement.accessKey

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6681

___

### accessKeyLabel

• `Readonly` **accessKeyLabel**: `string`

#### Inherited from

HTMLElement.accessKeyLabel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6682

___

### assignedSlot

• `Readonly` **assignedSlot**: `HTMLSlotElement`

#### Inherited from

HTMLElement.assignedSlot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15095

___

### attributes

• `Readonly` **attributes**: `NamedNodeMap`

#### Inherited from

HTMLElement.attributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5161

___

### autocapitalize

• **autocapitalize**: `string`

#### Inherited from

HTMLElement.autocapitalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6683

___

### autofocus

• **autofocus**: `boolean`

#### Inherited from

HTMLElement.autofocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8095

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

HTMLElement.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10848

___

### childElementCount

• `Readonly` **childElementCount**: `number`

#### Inherited from

HTMLElement.childElementCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11404

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`<ChildNode\>

Returns the children.

#### Inherited from

HTMLElement.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10852

___

### children

• `Readonly` **children**: `HTMLCollection`

Returns the child elements.

#### Inherited from

HTMLElement.children

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11408

___

### classList

• `Readonly` **classList**: `DOMTokenList`

Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.

#### Inherited from

HTMLElement.classList

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5165

___

### className

• **className**: `string`

Returns the value of element's class content attribute. Can be set to change it.

#### Inherited from

HTMLElement.className

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5169

___

### clientHeight

• `Readonly` **clientHeight**: `number`

#### Inherited from

HTMLElement.clientHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5170

___

### clientLeft

• `Readonly` **clientLeft**: `number`

#### Inherited from

HTMLElement.clientLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5171

___

### clientTop

• `Readonly` **clientTop**: `number`

#### Inherited from

HTMLElement.clientTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5172

___

### clientWidth

• `Readonly` **clientWidth**: `number`

#### Inherited from

HTMLElement.clientWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5173

___

### contentEditable

• **contentEditable**: `string`

#### Inherited from

HTMLElement.contentEditable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5325

___

### dataset

• `Readonly` **dataset**: `DOMStringMap`

#### Inherited from

HTMLElement.dataset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8096

___

### dir

• **dir**: `string`

#### Inherited from

HTMLElement.dir

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6684

___

### draggable

• **draggable**: `boolean`

#### Inherited from

HTMLElement.draggable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6685

___

### enterKeyHint

• **enterKeyHint**: `string`

#### Inherited from

HTMLElement.enterKeyHint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5326

___

### firstChild

• `Readonly` **firstChild**: `ChildNode`

Returns the first child.

#### Inherited from

HTMLElement.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10856

___

### firstElementChild

• `Readonly` **firstElementChild**: `Element`

Returns the first child that is an element, and null otherwise.

#### Inherited from

HTMLElement.firstElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11412

___

### hidden

• **hidden**: `boolean`

#### Inherited from

HTMLElement.hidden

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6686

___

### id

• **id**: `string`

Returns the value of element's id content attribute. Can be set to change it.

#### Inherited from

HTMLElement.id

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5177

___

### innerHTML

• **innerHTML**: `string`

#### Inherited from

HTMLElement.innerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9677

___

### innerText

• **innerText**: `string`

#### Inherited from

HTMLElement.innerText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6687

___

### inputMode

• **inputMode**: `string`

#### Inherited from

HTMLElement.inputMode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5327

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

HTMLElement.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10860

___

### isContentEditable

• `Readonly` **isContentEditable**: `boolean`

#### Inherited from

HTMLElement.isContentEditable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5328

___

### lang

• **lang**: `string`

#### Inherited from

HTMLElement.lang

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6688

___

### lastChild

• `Readonly` **lastChild**: `ChildNode`

Returns the last child.

#### Inherited from

HTMLElement.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10864

___

### lastElementChild

• `Readonly` **lastElementChild**: `Element`

Returns the last child that is an element, and null otherwise.

#### Inherited from

HTMLElement.lastElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11416

___

### localName

• `Readonly` **localName**: `string`

Returns the local name.

#### Inherited from

HTMLElement.localName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5181

___

### namespaceURI

• `Readonly` **namespaceURI**: `string`

Returns the namespace.

#### Inherited from

HTMLElement.namespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5185

___

### nextElementSibling

• `Readonly` **nextElementSibling**: `Element`

Returns the first following sibling that is an element, and null otherwise.

#### Inherited from

HTMLElement.nextElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11134

___

### nextSibling

• `Readonly` **nextSibling**: `ChildNode`

Returns the next sibling.

#### Inherited from

HTMLElement.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10870

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

HTMLElement.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10874

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

HTMLElement.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10878

___

### nodeValue

• **nodeValue**: `string`

#### Inherited from

HTMLElement.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10879

___

### nonce

• `Optional` **nonce**: `string`

#### Inherited from

HTMLElement.nonce

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8097

___

### offsetHeight

• `Readonly` **offsetHeight**: `number`

#### Inherited from

HTMLElement.offsetHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6689

___

### offsetLeft

• `Readonly` **offsetLeft**: `number`

#### Inherited from

HTMLElement.offsetLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6690

___

### offsetParent

• `Readonly` **offsetParent**: `Element`

#### Inherited from

HTMLElement.offsetParent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6691

___

### offsetTop

• `Readonly` **offsetTop**: `number`

#### Inherited from

HTMLElement.offsetTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6692

___

### offsetWidth

• `Readonly` **offsetWidth**: `number`

#### Inherited from

HTMLElement.offsetWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6693

___

### onabort

• **onabort**: (`ev`: `UIEvent`) => `any`

Fires when the user aborts the download.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `UIEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onabort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5871

___

### onanimationcancel

• **onanimationcancel**: (`ev`: `AnimationEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `AnimationEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onanimationcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5872

___

### onanimationend

• **onanimationend**: (`ev`: `AnimationEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `AnimationEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5873

___

### onanimationiteration

• **onanimationiteration**: (`ev`: `AnimationEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `AnimationEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5874

___

### onanimationstart

• **onanimationstart**: (`ev`: `AnimationEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `AnimationEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5875

___

### onauxclick

• **onauxclick**: (`ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onauxclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5876

___

### onblur

• **onblur**: (`ev`: `FocusEvent`) => `any`

Fires when the object loses the input focus.

**`param`** The focus event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `FocusEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onblur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5881

___

### oncancel

• **oncancel**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.oncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5882

___

### oncanplay

• **oncanplay**: (`ev`: `Event`) => `any`

Occurs when playback is possible, but would require further buffering.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.oncanplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5887

___

### oncanplaythrough

• **oncanplaythrough**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.oncanplaythrough

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5888

___

### onchange

• **onchange**: (`ev`: `Event`) => `any`

Fires when the contents of the object or selection have changed.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5893

___

### onclick

• **onclick**: (`ev`: `MouseEvent`) => `any`

Fires when the user clicks the left mouse button on the object

**`param`** The mouse event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5898

___

### onclose

• **onclose**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onclose

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5899

___

### oncontextmenu

• **oncontextmenu**: (`ev`: `MouseEvent`) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

**`param`** The mouse event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.oncontextmenu

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5904

___

### oncopy

• **oncopy**: (`ev`: `ClipboardEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `ClipboardEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.oncopy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4959

___

### oncuechange

• **oncuechange**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.oncuechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5905

___

### oncut

• **oncut**: (`ev`: `ClipboardEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `ClipboardEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.oncut

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4960

___

### ondblclick

• **ondblclick**: (`ev`: `MouseEvent`) => `any`

Fires when the user double-clicks the object.

**`param`** The mouse event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ondblclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5910

___

### ondrag

• **ondrag**: (`ev`: `DragEvent`) => `any`

Fires on the source object continuously during a drag operation.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `DragEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ondrag

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5915

___

### ondragend

• **ondragend**: (`ev`: `DragEvent`) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `DragEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ondragend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5920

___

### ondragenter

• **ondragenter**: (`ev`: `DragEvent`) => `any`

Fires on the target element when the user drags the object to a valid drop target.

**`param`** The drag event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `DragEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ondragenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5925

___

### ondragexit

• **ondragexit**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.ondragexit

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5926

___

### ondragleave

• **ondragleave**: (`ev`: `DragEvent`) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

**`param`** The drag event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `DragEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ondragleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5931

___

### ondragover

• **ondragover**: (`ev`: `DragEvent`) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `DragEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ondragover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5936

___

### ondragstart

• **ondragstart**: (`ev`: `DragEvent`) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `DragEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ondragstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5941

___

### ondrop

• **ondrop**: (`ev`: `DragEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `DragEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ondrop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5942

___

### ondurationchange

• **ondurationchange**: (`ev`: `Event`) => `any`

Occurs when the duration attribute is updated.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.ondurationchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5947

___

### onemptied

• **onemptied**: (`ev`: `Event`) => `any`

Occurs when the media element is reset to its initial state.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onemptied

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5952

___

### onended

• **onended**: (`ev`: `Event`) => `any`

Occurs when the end of playback is reached.

**`param`** The event

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onended

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5957

___

### onerror

• **onerror**: `OnErrorEventHandlerNonNull`

Fires when an error occurs during object loading.

**`param`** The event.

#### Inherited from

HTMLElement.onerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5962

___

### onfocus

• **onfocus**: (`ev`: `FocusEvent`) => `any`

Fires when the object receives focus.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `FocusEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onfocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5967

___

### onfullscreenchange

• **onfullscreenchange**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onfullscreenchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5186

___

### onfullscreenerror

• **onfullscreenerror**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onfullscreenerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5187

___

### ongotpointercapture

• **ongotpointercapture**: (`ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ongotpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5968

___

### oninput

• **oninput**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.oninput

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5969

___

### oninvalid

• **oninvalid**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.oninvalid

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5970

___

### onkeydown

• **onkeydown**: (`ev`: `KeyboardEvent`) => `any`

Fires when the user presses a key.

**`param`** The keyboard event

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `KeyboardEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onkeydown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5975

___

### onkeypress

• **onkeypress**: (`ev`: `KeyboardEvent`) => `any`

Fires when the user presses an alphanumeric key.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `KeyboardEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onkeypress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5980

___

### onkeyup

• **onkeyup**: (`ev`: `KeyboardEvent`) => `any`

Fires when the user releases a key.

**`param`** The keyboard event

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `KeyboardEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onkeyup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5985

___

### onload

• **onload**: (`ev`: `Event`) => `any`

Fires immediately after the browser loads the object.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onload

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5990

___

### onloadeddata

• **onloadeddata**: (`ev`: `Event`) => `any`

Occurs when media data is loaded at the current playback position.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onloadeddata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5995

___

### onloadedmetadata

• **onloadedmetadata**: (`ev`: `Event`) => `any`

Occurs when the duration and dimensions of the media have been determined.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onloadedmetadata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6000

___

### onloadstart

• **onloadstart**: (`ev`: `Event`) => `any`

Occurs when Internet Explorer begins looking for media data.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onloadstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6005

___

### onlostpointercapture

• **onlostpointercapture**: (`ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onlostpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6006

___

### onmousedown

• **onmousedown**: (`ev`: `MouseEvent`) => `any`

Fires when the user clicks the object with either mouse button.

**`param`** The mouse event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onmousedown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6011

___

### onmouseenter

• **onmouseenter**: (`ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onmouseenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6012

___

### onmouseleave

• **onmouseleave**: (`ev`: `MouseEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onmouseleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6013

___

### onmousemove

• **onmousemove**: (`ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse over the object.

**`param`** The mouse event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onmousemove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6018

___

### onmouseout

• **onmouseout**: (`ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

**`param`** The mouse event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onmouseout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6023

___

### onmouseover

• **onmouseover**: (`ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse pointer into the object.

**`param`** The mouse event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onmouseover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6028

___

### onmouseup

• **onmouseup**: (`ev`: `MouseEvent`) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

**`param`** The mouse event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `MouseEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onmouseup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6033

___

### onpaste

• **onpaste**: (`ev`: `ClipboardEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `ClipboardEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onpaste

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4961

___

### onpause

• **onpause**: (`ev`: `Event`) => `any`

Occurs when playback is paused.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onpause

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6038

___

### onplay

• **onplay**: (`ev`: `Event`) => `any`

Occurs when the play method is requested.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6043

___

### onplaying

• **onplaying**: (`ev`: `Event`) => `any`

Occurs when the audio or video has started playing.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onplaying

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6048

___

### onpointercancel

• **onpointercancel**: (`ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onpointercancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6049

___

### onpointerdown

• **onpointerdown**: (`ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onpointerdown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6050

___

### onpointerenter

• **onpointerenter**: (`ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onpointerenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6051

___

### onpointerleave

• **onpointerleave**: (`ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onpointerleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6052

___

### onpointermove

• **onpointermove**: (`ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onpointermove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6053

___

### onpointerout

• **onpointerout**: (`ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onpointerout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6054

___

### onpointerover

• **onpointerover**: (`ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onpointerover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6055

___

### onpointerup

• **onpointerup**: (`ev`: `PointerEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `PointerEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onpointerup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6056

___

### onprogress

• **onprogress**: (`ev`: `ProgressEvent`<EventTarget\>) => `any`

Occurs to indicate progress while downloading media data.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `ProgressEvent`<EventTarget\> |

##### Returns

`any`

#### Inherited from

HTMLElement.onprogress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6061

___

### onratechange

• **onratechange**: (`ev`: `Event`) => `any`

Occurs when the playback rate is increased or decreased.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onratechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6066

___

### onreset

• **onreset**: (`ev`: `Event`) => `any`

Fires when the user resets a form.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onreset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6071

___

### onresize

• **onresize**: (`ev`: `UIEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `UIEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onresize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6072

___

### onscroll

• **onscroll**: (`ev`: `Event`) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onscroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6077

___

### onsecuritypolicyviolation

• **onsecuritypolicyviolation**: (`ev`: `SecurityPolicyViolationEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `SecurityPolicyViolationEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onsecuritypolicyviolation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6078

___

### onseeked

• **onseeked**: (`ev`: `Event`) => `any`

Occurs when the seek operation ends.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onseeked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6083

___

### onseeking

• **onseeking**: (`ev`: `Event`) => `any`

Occurs when the current playback position is moved.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onseeking

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6088

___

### onselect

• **onselect**: (`ev`: `Event`) => `any`

Fires when the current selection changes.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onselect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6093

___

### onselectionchange

• **onselectionchange**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onselectionchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6094

___

### onselectstart

• **onselectstart**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onselectstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6095

___

### onstalled

• **onstalled**: (`ev`: `Event`) => `any`

Occurs when the download has stopped.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onstalled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6100

___

### onsubmit

• **onsubmit**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onsubmit

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6101

___

### onsuspend

• **onsuspend**: (`ev`: `Event`) => `any`

Occurs if the load operation has been intentionally halted.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onsuspend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6106

___

### ontimeupdate

• **ontimeupdate**: (`ev`: `Event`) => `any`

Occurs to indicate the current playback position.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.ontimeupdate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6111

___

### ontoggle

• **ontoggle**: (`ev`: `Event`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.ontoggle

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6112

___

### ontouchcancel

• `Optional` **ontouchcancel**: (`ev`: `TouchEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `TouchEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ontouchcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6113

___

### ontouchend

• `Optional` **ontouchend**: (`ev`: `TouchEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `TouchEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ontouchend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6114

___

### ontouchmove

• `Optional` **ontouchmove**: (`ev`: `TouchEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `TouchEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ontouchmove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6115

___

### ontouchstart

• `Optional` **ontouchstart**: (`ev`: `TouchEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `TouchEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ontouchstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6116

___

### ontransitioncancel

• **ontransitioncancel**: (`ev`: `TransitionEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `TransitionEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ontransitioncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6117

___

### ontransitionend

• **ontransitionend**: (`ev`: `TransitionEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `TransitionEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ontransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6118

___

### ontransitionrun

• **ontransitionrun**: (`ev`: `TransitionEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `TransitionEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ontransitionrun

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6119

___

### ontransitionstart

• **ontransitionstart**: (`ev`: `TransitionEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `TransitionEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.ontransitionstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6120

___

### onvolumechange

• **onvolumechange**: (`ev`: `Event`) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onvolumechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6125

___

### onwaiting

• **onwaiting**: (`ev`: `Event`) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

**`param`** The event.

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

##### Returns

`any`

#### Inherited from

HTMLElement.onwaiting

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6130

___

### onwheel

• **onwheel**: (`ev`: `WheelEvent`) => `any`

#### Type declaration

▸ (`ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `WheelEvent` |

##### Returns

`any`

#### Inherited from

HTMLElement.onwheel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6131

___

### outerHTML

• **outerHTML**: `string`

#### Inherited from

HTMLElement.outerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5188

___

### ownerDocument

• `Readonly` **ownerDocument**: `Document`

#### Inherited from

HTMLElement.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5189

___

### parentElement

• `Readonly` **parentElement**: `HTMLElement`

Returns the parent element.

#### Inherited from

HTMLElement.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10887

___

### parentNode

• `Readonly` **parentNode**: `Node` & `ParentNode`

Returns the parent.

#### Inherited from

HTMLElement.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10891

___

### playerService

• **playerService**: `PlayerService`

An instance of player-service which is in charge of all playing tasks

#### Defined in

[src/lib/elements/playerHTML.ts:13](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L13)

___

### prefix

• `Readonly` **prefix**: `string`

Returns the namespace prefix.

#### Inherited from

HTMLElement.prefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5193

___

### previousElementSibling

• `Readonly` **previousElementSibling**: `Element`

Returns the first preceding sibling that is an element, and null otherwise.

#### Inherited from

HTMLElement.previousElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11138

___

### previousSibling

• `Readonly` **previousSibling**: `ChildNode`

Returns the previous sibling.

#### Inherited from

HTMLElement.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10895

___

### scrollHeight

• `Readonly` **scrollHeight**: `number`

#### Inherited from

HTMLElement.scrollHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5194

___

### scrollLeft

• **scrollLeft**: `number`

#### Inherited from

HTMLElement.scrollLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5195

___

### scrollTop

• **scrollTop**: `number`

#### Inherited from

HTMLElement.scrollTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5196

___

### scrollWidth

• `Readonly` **scrollWidth**: `number`

#### Inherited from

HTMLElement.scrollWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5197

___

### shadowRoot

• `Readonly` **shadowRoot**: `ShadowRoot`

Returns element's shadow root, if any, and if shadow root's mode is "open", and null otherwise.

#### Inherited from

HTMLElement.shadowRoot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5201

___

### slot

• **slot**: `string`

Returns the value of element's slot content attribute. Can be set to change it.

#### Inherited from

HTMLElement.slot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5205

___

### spellcheck

• **spellcheck**: `boolean`

#### Inherited from

HTMLElement.spellcheck

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6694

___

### style

• `Readonly` **style**: `CSSStyleDeclaration`

#### Inherited from

HTMLElement.style

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5321

___

### tabIndex

• **tabIndex**: `number`

#### Inherited from

HTMLElement.tabIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8098

___

### tagName

• `Readonly` **tagName**: `string`

Returns the HTML-uppercased qualified name.

#### Inherited from

HTMLElement.tagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5209

___

### textContent

• **textContent**: `string`

#### Inherited from

HTMLElement.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10896

___

### title

• **title**: `string`

#### Inherited from

HTMLElement.title

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6695

___

### translate

• **translate**: `boolean`

#### Inherited from

HTMLElement.translate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6696

## Accessors

### index

• `get` **index**(): `number`

Get the index of the song being played by the service

#### Returns

`number`

#### Defined in

[src/lib/elements/playerHTML.ts:22](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L22)

___

### percentage

• `get` **percentage**(): `number`

Get the progress percentage of the song being played by the service

#### Returns

`number`

#### Defined in

[src/lib/elements/playerHTML.ts:35](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L35)

___

### playlist

• `get` **playlist**(): `Song`[]

Get the playlist from the service

#### Returns

`Song`[]

#### Defined in

[src/lib/elements/playerHTML.ts:16](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L16)

___

### position

• `get` **position**(): `number`

Get the progress position in seconds of the song being played by the service

#### Returns

`number`

#### Defined in

[src/lib/elements/playerHTML.ts:29](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L29)

## Methods

### addEventListener

▸ **addEventListener**<K\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: `HTMLElementEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

HTMLElement.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6698

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

HTMLElement.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6699

___

### after

▸ **after**(...`nodes`): `void`

Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

HTMLElement.after

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3577

___

### animate

▸ **animate**(`keyframes`, `options?`): `Animation`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframes` | `Keyframe`[] \| `PropertyIndexedKeyframes` |
| `options?` | `number` \| `KeyframeAnimationOptions` |

#### Returns

`Animation`

#### Inherited from

HTMLElement.animate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2113

___

### append

▸ **append**(...`nodes`): `void`

Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

HTMLElement.append

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11422

___

### appendChild

▸ **appendChild**<T\>(`newChild`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T`: `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `newChild` | `T` |

#### Returns

`T`

#### Inherited from

HTMLElement.appendChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10897

___

### attachShadow

▸ **attachShadow**(`init`): `ShadowRoot`

Creates a shadow root for element and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `ShadowRootInit` |

#### Returns

`ShadowRoot`

#### Inherited from

HTMLElement.attachShadow

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5213

___

### before

▸ **before**(...`nodes`): `void`

Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

HTMLElement.before

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3583

___

### blur

▸ **blur**(): `void`

#### Returns

`void`

#### Inherited from

HTMLElement.blur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8099

___

### click

▸ **click**(): `void`

#### Returns

`void`

#### Inherited from

HTMLElement.click

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6697

___

### cloneNode

▸ **cloneNode**(`deep?`): `Node`

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep?` | `boolean` |

#### Returns

`Node`

#### Inherited from

HTMLElement.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10901

___

### closest

▸ **closest**<K\>(`selector`): `HTMLElementTagNameMap`[`K`]

Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

`HTMLElementTagNameMap`[`K`]

#### Inherited from

HTMLElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5217

▸ **closest**<K\>(`selector`): `SVGElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

`SVGElementTagNameMap`[`K`]

#### Inherited from

HTMLElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5218

▸ **closest**<E\>(`selector`): `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | `E`: `Element` = `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

`E`

#### Inherited from

HTMLElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5219

___

### compareDocumentPosition

▸ **compareDocumentPosition**(`other`): `number`

Returns a bitmask indicating the position of other relative to node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Node` |

#### Returns

`number`

#### Inherited from

HTMLElement.compareDocumentPosition

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10905

___

### contains

▸ **contains**(`other`): `boolean`

Returns true if other is an inclusive descendant of node, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Node` |

#### Returns

`boolean`

#### Inherited from

HTMLElement.contains

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10909

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

HTMLElement.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5489

___

### eventsDispatcher

▸ `Private` **eventsDispatcher**(`payload`): `void`

Method in charge of dispatching events received from the service

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `PlayerServiceEvent` |

#### Returns

`void`

#### Defined in

[src/lib/elements/playerHTML.ts:78](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L78)

___

### focus

▸ **focus**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `FocusOptions` |

#### Returns

`void`

#### Inherited from

HTMLElement.focus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8100

___

### getAnimations

▸ **getAnimations**(): `Animation`[]

#### Returns

`Animation`[]

#### Inherited from

HTMLElement.getAnimations

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2114

___

### getAttribute

▸ **getAttribute**(`qualifiedName`): `string`

Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`string`

#### Inherited from

HTMLElement.getAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5223

___

### getAttributeNS

▸ **getAttributeNS**(`namespace`, `localName`): `string`

Returns element's attribute whose namespace is namespace and local name is localName, and null if there is no such attribute otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `localName` | `string` |

#### Returns

`string`

#### Inherited from

HTMLElement.getAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5227

___

### getAttributeNames

▸ **getAttributeNames**(): `string`[]

Returns the qualified names of all element's attributes. Can contain duplicates.

#### Returns

`string`[]

#### Inherited from

HTMLElement.getAttributeNames

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5231

___

### getAttributeNode

▸ **getAttributeNode**(`qualifiedName`): `Attr`

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`Attr`

#### Inherited from

HTMLElement.getAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5232

___

### getAttributeNodeNS

▸ **getAttributeNodeNS**(`namespace`, `localName`): `Attr`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `localName` | `string` |

#### Returns

`Attr`

#### Inherited from

HTMLElement.getAttributeNodeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5233

___

### getBoundingClientRect

▸ **getBoundingClientRect**(): `DOMRect`

#### Returns

`DOMRect`

#### Inherited from

HTMLElement.getBoundingClientRect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5234

___

### getClientRects

▸ **getClientRects**(): `DOMRectList`

#### Returns

`DOMRectList`

#### Inherited from

HTMLElement.getClientRects

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5235

___

### getElementsByClassName

▸ **getElementsByClassName**(`classNames`): `HTMLCollectionOf`<Element\>

Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `classNames` | `string` |

#### Returns

`HTMLCollectionOf`<Element\>

#### Inherited from

HTMLElement.getElementsByClassName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5239

___

### getElementsByTagName

▸ **getElementsByTagName**<K\>(`qualifiedName`): `HTMLCollectionOf`<`HTMLElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`<`HTMLElementTagNameMap`[`K`]\>

#### Inherited from

HTMLElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5240

▸ **getElementsByTagName**<K\>(`qualifiedName`): `HTMLCollectionOf`<`SVGElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`<`SVGElementTagNameMap`[`K`]\>

#### Inherited from

HTMLElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5241

▸ **getElementsByTagName**(`qualifiedName`): `HTMLCollectionOf`<Element\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`HTMLCollectionOf`<Element\>

#### Inherited from

HTMLElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5242

___

### getElementsByTagNameNS

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<HTMLElement\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<HTMLElement\>

#### Inherited from

HTMLElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5243

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<SVGElement\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<SVGElement\>

#### Inherited from

HTMLElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5244

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<Element\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | `string` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<Element\>

#### Inherited from

HTMLElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5245

___

### getRootNode

▸ **getRootNode**(`options?`): `Node`

Returns node's root.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `GetRootNodeOptions` |

#### Returns

`Node`

#### Inherited from

HTMLElement.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10913

___

### getSongTimeLeft

▸ **getSongTimeLeft**(`index?`): `number`

Get the ETA of the song being played by the service.
If an index is provided it will return the ETA of the song at that index
in the playlist of the service

#### Parameters

| Name | Type |
| :------ | :------ |
| `index?` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/elements/playerHTML.ts:44](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L44)

___

### getSongTotalTime

▸ **getSongTotalTime**(`index?`): `number`

Get the total duration in seconds of the song being played by the service
If an index is provided it will return the total duration of the song at that index
in the playlist of the service

#### Parameters

| Name | Type |
| :------ | :------ |
| `index?` | `number` |

#### Returns

`number`

#### Defined in

[src/lib/elements/playerHTML.ts:52](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L52)

___

### hasAttribute

▸ **hasAttribute**(`qualifiedName`): `boolean`

Returns true if element has an attribute whose qualified name is qualifiedName, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`boolean`

#### Inherited from

HTMLElement.hasAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5249

___

### hasAttributeNS

▸ **hasAttributeNS**(`namespace`, `localName`): `boolean`

Returns true if element has an attribute whose namespace is namespace and local name is localName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `localName` | `string` |

#### Returns

`boolean`

#### Inherited from

HTMLElement.hasAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5253

___

### hasAttributes

▸ **hasAttributes**(): `boolean`

Returns true if element has attributes, and false otherwise.

#### Returns

`boolean`

#### Inherited from

HTMLElement.hasAttributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5257

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

HTMLElement.hasChildNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10917

___

### hasPointerCapture

▸ **hasPointerCapture**(`pointerId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`boolean`

#### Inherited from

HTMLElement.hasPointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5258

___

### insertAdjacentElement

▸ **insertAdjacentElement**(`position`, `insertedElement`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `InsertPosition` |
| `insertedElement` | `Element` |

#### Returns

`Element`

#### Inherited from

HTMLElement.insertAdjacentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5259

___

### insertAdjacentHTML

▸ **insertAdjacentHTML**(`where`, `html`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | `InsertPosition` |
| `html` | `string` |

#### Returns

`void`

#### Inherited from

HTMLElement.insertAdjacentHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5260

___

### insertAdjacentText

▸ **insertAdjacentText**(`where`, `text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | `InsertPosition` |
| `text` | `string` |

#### Returns

`void`

#### Inherited from

HTMLElement.insertAdjacentText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5261

___

### insertBefore

▸ **insertBefore**<T\>(`newChild`, `refChild`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T`: `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `newChild` | `T` |
| `refChild` | `Node` |

#### Returns

`T`

#### Inherited from

HTMLElement.insertBefore

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10918

___

### isDefaultNamespace

▸ **isDefaultNamespace**(`namespace`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Returns

`boolean`

#### Inherited from

HTMLElement.isDefaultNamespace

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10919

___

### isEqualNode

▸ **isEqualNode**(`otherNode`): `boolean`

Returns whether node and otherNode have the same properties.

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | `Node` |

#### Returns

`boolean`

#### Inherited from

HTMLElement.isEqualNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10923

___

### isSameNode

▸ **isSameNode**(`otherNode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | `Node` |

#### Returns

`boolean`

#### Inherited from

HTMLElement.isSameNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10924

___

### lookupNamespaceURI

▸ **lookupNamespaceURI**(`prefix`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

`string`

#### Inherited from

HTMLElement.lookupNamespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10925

___

### lookupPrefix

▸ **lookupPrefix**(`namespace`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Returns

`string`

#### Inherited from

HTMLElement.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10926

___

### matches

▸ **matches**(`selectors`): `boolean`

Returns true if matching selectors against element's root yields element, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`boolean`

#### Inherited from

HTMLElement.matches

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5265

___

### msGetRegionContent

▸ **msGetRegionContent**(): `any`

#### Returns

`any`

#### Inherited from

HTMLElement.msGetRegionContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5266

___

### next

▸ **next**(): `void`

Play next song in the playlist, if we are already on the last track
it will play the first one

#### Returns

`void`

#### Defined in

[src/lib/elements/playerHTML.ts:127](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L127)

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

HTMLElement.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10930

___

### pause

▸ **pause**(`options?`): `void`

Pause the song being played . if index provided it will put on pause
the song at that index in the playlist, this is useful when playing multiple
songs at the same time, a feature offered by this library.
If pauseOthers is true, it will put on pause all the tracks in the playlist

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.index?` | `number` |
| `options.pauseOthers?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/lib/elements/playerHTML.ts:103](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L103)

___

### play

▸ **play**(`options`): `Promise`<number\>

Start playing. if on pause, it will resume the actual song
if not it will play the first song in the playlist.
if index param is given inside options, it will play the song at the index.
It will resolve a promise with 1 if successfully play,
it will resolve -1 if the playlist is empty

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

`Promise`<number\>

#### Defined in

[src/lib/elements/playerHTML.ts:91](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L91)

___

### prepend

▸ **prepend**(...`nodes`): `void`

Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

HTMLElement.prepend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11428

___

### prev

▸ **prev**(): `void`

Play the previously played song in the playlist if actual
song being played hasn't been played for more than 2 seconds,
otherwise it will simply restart the actual song

#### Returns

`void`

#### Defined in

[src/lib/elements/playerHTML.ts:139](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L139)

___

### querySelector

▸ **querySelector**<K\>(`selectors`): `HTMLElementTagNameMap`[`K`]

Returns the first element that is a descendant of node that matches selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`HTMLElementTagNameMap`[`K`]

#### Inherited from

HTMLElement.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11432

▸ **querySelector**<K\>(`selectors`): `SVGElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`SVGElementTagNameMap`[`K`]

#### Inherited from

HTMLElement.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11433

▸ **querySelector**<E\>(`selectors`): `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | `E`: `Element` = `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`E`

#### Inherited from

HTMLElement.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11434

___

### querySelectorAll

▸ **querySelectorAll**<K\>(`selectors`): `NodeListOf`<`HTMLElementTagNameMap`[`K`]\>

Returns all element descendants of node that match selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`<`HTMLElementTagNameMap`[`K`]\>

#### Inherited from

HTMLElement.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11438

▸ **querySelectorAll**<K\>(`selectors`): `NodeListOf`<`SVGElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`<`SVGElementTagNameMap`[`K`]\>

#### Inherited from

HTMLElement.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11439

▸ **querySelectorAll**<E\>(`selectors`): `NodeListOf`<E\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | `E`: `Element` = `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`NodeListOf`<E\>

#### Inherited from

HTMLElement.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11440

___

### releasePointerCapture

▸ **releasePointerCapture**(`pointerId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`void`

#### Inherited from

HTMLElement.releasePointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5267

___

### remove

▸ **remove**(): `void`

Removes node.

#### Returns

`void`

#### Inherited from

HTMLElement.remove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3587

___

### removeAttribute

▸ **removeAttribute**(`qualifiedName`): `void`

Removes element's first attribute whose qualified name is qualifiedName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`void`

#### Inherited from

HTMLElement.removeAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5271

___

### removeAttributeNS

▸ **removeAttributeNS**(`namespace`, `localName`): `void`

Removes element's attribute whose namespace is namespace and local name is localName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `localName` | `string` |

#### Returns

`void`

#### Inherited from

HTMLElement.removeAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5275

___

### removeAttributeNode

▸ **removeAttributeNode**(`attr`): `Attr`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `Attr` |

#### Returns

`Attr`

#### Inherited from

HTMLElement.removeAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5276

___

### removeChild

▸ **removeChild**<T\>(`oldChild`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T`: `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldChild` | `T` |

#### Returns

`T`

#### Inherited from

HTMLElement.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10931

___

### removeEventListener

▸ **removeEventListener**<K\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K`: keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: `HTMLElementEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

HTMLElement.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6700

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

HTMLElement.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6701

___

### replaceChild

▸ **replaceChild**<T\>(`newChild`, `oldChild`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T`: `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `newChild` | `Node` |
| `oldChild` | `T` |

#### Returns

`T`

#### Inherited from

HTMLElement.replaceChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10932

___

### replaceWith

▸ **replaceWith**(...`nodes`): `void`

Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

HTMLElement.replaceWith

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3593

___

### requestFullscreen

▸ **requestFullscreen**(`options?`): `Promise`<void\>

Displays element fullscreen and resolves promise when done.

When supplied, options's navigationUI member indicates whether showing navigation UI while in fullscreen is preferred or not. If set to "show", navigation simplicity is preferred over screen space, and if set to "hide", more screen space is preferred. User agents are always free to honor user preference over the application's. The default value "auto" indicates no application preference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `FullscreenOptions` |

#### Returns

`Promise`<void\>

#### Inherited from

HTMLElement.requestFullscreen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5282

___

### requestPointerLock

▸ **requestPointerLock**(): `void`

#### Returns

`void`

#### Inherited from

HTMLElement.requestPointerLock

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5283

___

### scroll

▸ **scroll**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScrollToOptions` |

#### Returns

`void`

#### Inherited from

HTMLElement.scroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5284

▸ **scroll**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

HTMLElement.scroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5285

___

### scrollBy

▸ **scrollBy**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScrollToOptions` |

#### Returns

`void`

#### Inherited from

HTMLElement.scrollBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5286

▸ **scrollBy**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

HTMLElement.scrollBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5287

___

### scrollIntoView

▸ **scrollIntoView**(`arg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | `boolean` \| `ScrollIntoViewOptions` |

#### Returns

`void`

#### Inherited from

HTMLElement.scrollIntoView

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5288

___

### scrollTo

▸ **scrollTo**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScrollToOptions` |

#### Returns

`void`

#### Inherited from

HTMLElement.scrollTo

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5289

▸ **scrollTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

HTMLElement.scrollTo

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5290

___

### seekForJump

▸ **seekForJump**(`event`): `void`

Jump in forward or backward in seconds, jump offset is the value
event.detail.jump of event: CustomEvent. If the offset is a negative
value, it will jump backwards

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `CustomEvent`<any\> |

#### Returns

`void`

#### Defined in

[src/lib/elements/playerHTML.ts:177](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L177)

___

### seekPerPercentage

▸ **seekPerPercentage**(`percentage`, `index?`): `void`

Jump to a given progress percentage of actual song,
if index is provided, it will make the jump on the song at the
given index in the playlist

#### Parameters

| Name | Type |
| :------ | :------ |
| `percentage` | `number` |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

[src/lib/elements/playerHTML.ts:150](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L150)

___

### seekPerPercentageAndIndex

▸ **seekPerPercentageAndIndex**(`clickEvent`): `void`

Jump to a given progress percentage of actual song,
if index is provided, it will make the jump on the song at the
given index in the playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `clickEvent` | `eventSeek` |

#### Returns

`void`

#### Defined in

[src/lib/elements/playerHTML.ts:189](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L189)

___

### seekPerPosition

▸ **seekPerPosition**(`position`): `void`

Jump to a given progress position in seconds of actual song,
if index is provided, it will make the jump on the song at the
given index in the playlist

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

`void`

#### Defined in

[src/lib/elements/playerHTML.ts:165](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L165)

___

### setAttribute

▸ **setAttribute**(`qualifiedName`, `value`): `void`

Sets the value of element's first attribute whose qualified name is qualifiedName to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

HTMLElement.setAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5294

___

### setAttributeNS

▸ **setAttributeNS**(`namespace`, `qualifiedName`, `value`): `void`

Sets the value of element's attribute whose namespace is namespace and local name is localName to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `qualifiedName` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

HTMLElement.setAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5298

___

### setAttributeNode

▸ **setAttributeNode**(`attr`): `Attr`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `Attr` |

#### Returns

`Attr`

#### Inherited from

HTMLElement.setAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5299

___

### setAttributeNodeNS

▸ **setAttributeNodeNS**(`attr`): `Attr`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `Attr` |

#### Returns

`Attr`

#### Inherited from

HTMLElement.setAttributeNodeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5300

___

### setPlayerService

▸ **setPlayerService**(`playerService`): `void`

Set the instance of playerService

#### Parameters

| Name | Type |
| :------ | :------ |
| `playerService` | `PlayerService` |

#### Returns

`void`

#### Defined in

[src/lib/elements/playerHTML.ts:69](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L69)

___

### setPointerCapture

▸ **setPointerCapture**(`pointerId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`void`

#### Inherited from

HTMLElement.setPointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5301

___

### stop

▸ **stop**(`index?`): `void`

Stop the song being played, if index provided it will stop the song
at that index in the playlist

#### Parameters

| Name | Type |
| :------ | :------ |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

[src/lib/elements/playerHTML.ts:113](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-configs/src/lib/elements/playerHTML.ts#L113)

___

### toggleAttribute

▸ **toggleAttribute**(`qualifiedName`, `force?`): `boolean`

If force is not given, "toggles" qualifiedName, removing it if it is present and adding it if it is not present. If force is true, adds qualifiedName. If force is false, removes qualifiedName.

Returns true if qualifiedName is now present, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `force?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

HTMLElement.toggleAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5307

___

### webkitMatchesSelector

▸ **webkitMatchesSelector**(`selectors`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`boolean`

#### Inherited from

HTMLElement.webkitMatchesSelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5308
