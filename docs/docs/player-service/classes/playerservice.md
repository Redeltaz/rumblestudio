[@rumblestudio/player-service](./player-service/README.md) / [Exports](./player-service/modules.md) / PlayerService

# Class: PlayerService

Class representing a service that exposes an API for
 playing audio files

## Table of contents

### Constructors

- [constructor](./player-service/classes/playerservice.md#constructor)

### Properties

- [\_duration](./player-service/classes/playerservice.md#_duration)
- [\_index](./player-service/classes/playerservice.md#_index)
- [\_isPlaying](./player-service/classes/playerservice.md#_isplaying)
- [\_percentage](./player-service/classes/playerservice.md#_percentage)
- [\_playlist](./player-service/classes/playerservice.md#_playlist)
- [\_position](./player-service/classes/playerservice.md#_position)
- [\_rate](./player-service/classes/playerservice.md#_rate)
- [\_shuffle](./player-service/classes/playerservice.md#_shuffle)
- [\_unloadAll](./player-service/classes/playerservice.md#_unloadall)
- [\_volume](./player-service/classes/playerservice.md#_volume)
- [autoPlay](./player-service/classes/playerservice.md#autoplay)
- [autoPlayNext](./player-service/classes/playerservice.md#autoplaynext)
- [loop](./player-service/classes/playerservice.md#loop)
- [playingEventsCallbacks](./player-service/classes/playerservice.md#playingeventscallbacks)

### Accessors

- [duration](./player-service/classes/playerservice.md#duration)
- [index](./player-service/classes/playerservice.md#index)
- [isPlaying](./player-service/classes/playerservice.md#isplaying)
- [percentage](./player-service/classes/playerservice.md#percentage)
- [playlist](./player-service/classes/playerservice.md#playlist)
- [position](./player-service/classes/playerservice.md#position)
- [rate](./player-service/classes/playerservice.md#rate)
- [shuffle](./player-service/classes/playerservice.md#shuffle)
- [unloadAll](./player-service/classes/playerservice.md#unloadall)
- [volume](./player-service/classes/playerservice.md#volume)

### Methods

- [PlayerStateChangedCallback](./player-service/classes/playerservice.md#playerstatechangedcallback)
- [addNewOnCallback](./player-service/classes/playerservice.md#addnewoncallback)
- [addSong](./player-service/classes/playerservice.md#addsong)
- [download](./player-service/classes/playerservice.md#download)
- [emit](./player-service/classes/playerservice.md#emit)
- [generateSongFromUrl](./player-service/classes/playerservice.md#generatesongfromurl)
- [getRank](./player-service/classes/playerservice.md#getrank)
- [getSong](./player-service/classes/playerservice.md#getsong)
- [getSongTimeLeft](./player-service/classes/playerservice.md#getsongtimeleft)
- [getSongTotalTime](./player-service/classes/playerservice.md#getsongtotaltime)
- [loadSong](./player-service/classes/playerservice.md#loadsong)
- [next](./player-service/classes/playerservice.md#next)
- [pause](./player-service/classes/playerservice.md#pause)
- [play](./player-service/classes/playerservice.md#play)
- [playWithOptions](./player-service/classes/playerservice.md#playwithoptions)
- [preloadPlaylist](./player-service/classes/playerservice.md#preloadplaylist)
- [prev](./player-service/classes/playerservice.md#prev)
- [seekPerPercentage](./player-service/classes/playerservice.md#seekperpercentage)
- [seekPerPosition](./player-service/classes/playerservice.md#seekperposition)
- [setPLaylistFromRSSFeedURL](./player-service/classes/playerservice.md#setplaylistfromrssfeedurl)
- [setPlaylistFromSongObjects](./player-service/classes/playerservice.md#setplaylistfromsongobjects)
- [setPlaylistFromUrls](./player-service/classes/playerservice.md#setplaylistfromurls)
- [shufflePlaylist](./player-service/classes/playerservice.md#shuffleplaylist)
- [stop](./player-service/classes/playerservice.md#stop)
- [unload](./player-service/classes/playerservice.md#unload)
- [unloadSong](./player-service/classes/playerservice.md#unloadsong)

## Constructors

### constructor

• **new PlayerService**(`update_delay?`)

Create a player service

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `update_delay` | `number` | 100 |

#### Defined in

[lib/player-service.ts:235](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L235)

## Properties

### \_duration

• `Private` **\_duration**: `number`

The total duration of the song actually being played

#### Defined in

[lib/player-service.ts:190](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L190)

___

### \_index

• `Private` **\_index**: `number`

The index in the playlist of the song
actually being played

#### Defined in

[lib/player-service.ts:149](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L149)

___

### \_isPlaying

• `Private` **\_isPlaying**: `boolean` = false

True when there is a song actually being played

#### Defined in

[lib/player-service.ts:22](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L22)

___

### \_percentage

• `Private` **\_percentage**: `number`

The progress in percentage of the song being played

#### Defined in

[lib/player-service.ts:203](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L203)

___

### \_playlist

• `Private` **\_playlist**: [Song](./player-service/interfaces/song.md)[]

An array containing a set set of song to be played
it can contain a single song or multiple songs loaded
from an RSS feed URL, audio file urls or Song Objects

#### Defined in

[lib/player-service.ts:166](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L166)

___

### \_position

• `Private` **\_position**: `number`

The progress in seconds of the song being played

#### Defined in

[lib/player-service.ts:218](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L218)

___

### \_rate

• `Private` **\_rate**: `number` = 1

The rate of the playback speed, a value between 0.5 to 4.0
1.0 is the normal speed which is default value

#### Defined in

[lib/player-service.ts:102](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L102)

___

### \_shuffle

• **\_shuffle**: `boolean` = false

If set to true, the playlist will be shuffled in a random a order

#### Defined in

[lib/player-service.ts:50](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L50)

___

### \_unloadAll

• **\_unloadAll**: `boolean` = false

If set to true, player will keep loaded only 3 songs in the playlist:
the previous song, actual song and next song. This will not have any
effect if the playlist contains less than 5 songs

#### Defined in

[lib/player-service.ts:81](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L81)

___

### \_volume

• `Private` **\_volume**: `number` = 1

The volume of playback. a value between 0 to 1.0.
default value is the max : 1

#### Defined in

[lib/player-service.ts:124](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L124)

___

### autoPlay

• **autoPlay**: `boolean` = false

If set to true, the player will automatically start playing
when a new song or playlist is loaded

#### Defined in

[lib/player-service.ts:44](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L44)

___

### autoPlayNext

• **autoPlayNext**: `boolean` = true

When set to true the player will automatically
play the next song in the playlist when actual
song reaches end

#### Defined in

[lib/player-service.ts:19](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L19)

___

### loop

• **loop**: `boolean` = false

If set to true, the actually played song will be played in loop

#### Defined in

[lib/player-service.ts:47](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L47)

___

### playingEventsCallbacks

• `Private` **playingEventsCallbacks**: (`event`: [PlayerServiceEvent](./player-service/interfaces/playerserviceevent.md)) => `void`[] = []

CALLBACKS ON STATE CHANGE

#### Defined in

[lib/player-service.ts:907](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L907)

## Accessors

### duration

• `get` **duration**(): `number`

Get the value of _duration

#### Returns

`number`

#### Defined in

[lib/player-service.ts:193](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L193)

• `set` **duration**(`newDuration`): `void`

Set the value of _duration

#### Parameters

| Name | Type |
| :------ | :------ |
| `newDuration` | `number` |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:197](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L197)

___

### index

• `get` **index**(): `number`

Get the value of _index

#### Returns

`number`

#### Defined in

[lib/player-service.ts:151](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L151)

• `set` **index**(`value`): `void`

Set the value of _index

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:156](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L156)

___

### isPlaying

• `get` **isPlaying**(): `boolean`

Get the _isPlaying value

#### Returns

`boolean`

#### Defined in

[lib/player-service.ts:25](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L25)

• `set` **isPlaying**(`newPlayingState`): `void`

Set the _isPlaying value

#### Parameters

| Name | Type |
| :------ | :------ |
| `newPlayingState` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:30](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L30)

___

### percentage

• `get` **percentage**(): `number`

Get the value of _percentage

#### Returns

`number`

#### Defined in

[lib/player-service.ts:206](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L206)

• `set` **percentage**(`newPercentage`): `void`

Set the value of _percentage

#### Parameters

| Name | Type |
| :------ | :------ |
| `newPercentage` | `number` |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:211](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L211)

___

### playlist

• `get` **playlist**(): [Song](./player-service/interfaces/song.md)[]

Get the value of _playlist

#### Returns

[Song](./player-service/interfaces/song.md)[]

#### Defined in

[lib/player-service.ts:171](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L171)

• `set` **playlist**(`playlist`): `void`

Set the value of playlist

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist` | [Song](./player-service/interfaces/song.md)[] |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:179](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L179)

___

### position

• `get` **position**(): `number`

Get the value of _position

#### Returns

`number`

#### Defined in

[lib/player-service.ts:221](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L221)

• `set` **position**(`newPosition`): `void`

Set the value of _position

#### Parameters

| Name | Type |
| :------ | :------ |
| `newPosition` | `number` |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:226](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L226)

___

### rate

• `get` **rate**(): `number`

Get the value of _rate

#### Returns

`number`

#### Defined in

[lib/player-service.ts:105](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L105)

• `set` **rate**(`rate`): `void`

Set the value of rate

#### Parameters

| Name | Type |
| :------ | :------ |
| `rate` | `number` |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:110](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L110)

___

### shuffle

• `get` **shuffle**(): `boolean`

Get the value of _shuffle

#### Returns

`boolean`

#### Defined in

[lib/player-service.ts:53](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L53)

• `set` **shuffle**(`value`): `void`

Set the value of shuffle

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:58](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L58)

___

### unloadAll

• `get` **unloadAll**(): `boolean`

Get the value of _unloadAll

#### Returns

`boolean`

#### Defined in

[lib/player-service.ts:84](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L84)

• `set` **unloadAll**(`value`): `void`

Set the value of _unloadAll

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:89](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L89)

___

### volume

• `get` **volume**(): `number`

Get the value of _volume

#### Returns

`number`

#### Defined in

[lib/player-service.ts:127](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L127)

• `set` **volume**(`level`): `void`

Set the value of _volume

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:132](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L132)

## Methods

### PlayerStateChangedCallback

▸ `Private` **PlayerStateChangedCallback**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [PlayerServiceEvent](./player-service/interfaces/playerserviceevent.md) |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:909](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L909)

___

### addNewOnCallback

▸ **addNewOnCallback**(`callback`): `void`

CALLBACKS ON UPDATE

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`event`: [PlayerServiceEvent](./player-service/interfaces/playerserviceevent.md)) => `void` |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:898](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L898)

___

### addSong

▸ **addSong**(`songFileUrl`): `void`

Add a new track in the playlist

#### Parameters

| Name | Type |
| :------ | :------ |
| `songFileUrl` | `string` |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:402](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L402)

___

### download

▸ **download**(`index?`): `Promise`<void\>

Allows to download song file from its index in the playlist.
If the index is not provided, it will download the track actually played

#### Parameters

| Name | Type |
| :------ | :------ |
| `index?` | `number` |

#### Returns

`Promise`<void\>

#### Defined in

[lib/player-service.ts:864](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L864)

___

### emit

▸ `Private` **emit**(`type`): `void`

Responsible for emitting events whenever the player state changes

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [PlayerServiceEventType](./player-service/enums/playerserviceeventtype.md) |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:917](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L917)

___

### generateSongFromUrl

▸ `Private` **generateSongFromUrl**(`url`, `index`): [Song](./player-service/interfaces/song.md)

Allows to generate a song object using an URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `index` | `number` |

#### Returns

[Song](./player-service/interfaces/song.md)

#### Defined in

[lib/player-service.ts:775](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L775)

___

### getRank

▸ **getRank**(`song`): `number`

Returns the index of a given song in the playlist

#### Parameters

| Name | Type |
| :------ | :------ |
| `song` | [Song](./player-service/interfaces/song.md) |

#### Returns

`number`

#### Defined in

[lib/player-service.ts:254](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L254)

___

### getSong

▸ **getSong**(`index`, `instanciateHowlIfMissing?`): [Song](./player-service/interfaces/song.md)

Returns the song at index in the playlist, if instanciateHowlIfMissing
is set to true, it will load the song if it is not already loaded
this is important when unloadAll is set to true

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `instanciateHowlIfMissing` | `boolean` | true |

#### Returns

[Song](./player-service/interfaces/song.md)

#### Defined in

[lib/player-service.ts:275](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L275)

___

### getSongTimeLeft

▸ **getSongTimeLeft**(`index?`): `number`

Returns the ETA of the actual song in seconds, if index provided it will
return the ETA for the song at index in the playlist

#### Parameters

| Name | Type |
| :------ | :------ |
| `index?` | `number` |

#### Returns

`number`

#### Defined in

[lib/player-service.ts:698](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L698)

___

### getSongTotalTime

▸ **getSongTotalTime**(`index?`): `number`

Returns the total duration in seconds of the song at index
otherwise it returns the total duration of the actual song

#### Parameters

| Name | Type |
| :------ | :------ |
| `index?` | `number` |

#### Returns

`number`

#### Defined in

[lib/player-service.ts:719](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L719)

___

### loadSong

▸ **loadSong**(`song`): `void`

Load a song

#### Parameters

| Name | Type |
| :------ | :------ |
| `song` | [Song](./player-service/interfaces/song.md) |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:393](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L393)

___

### next

▸ **next**(): `void`

Play next song in the playlist, if we are already on the last track
it will play the first one

#### Returns

`void`

#### Defined in

[lib/player-service.ts:528](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L528)

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

[lib/player-service.ts:463](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L463)

___

### play

▸ **play**(`index?`): `Promise`<number\>

Start playing. if on pause, it will resume the actual song
if not it will play the first song in the playlist.
if index param is given, it will play the song at the index.
It will resolve a promise with 1 if successfully play,
it will resolve -1 if the playlist is empty

#### Parameters

| Name | Type |
| :------ | :------ |
| `index?` | `number` |

#### Returns

`Promise`<number\>

#### Defined in

[lib/player-service.ts:418](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L418)

___

### playWithOptions

▸ **playWithOptions**(`options`): `Promise`<number\>

Same as play, start playing, but with the possibility to add additional
options such as stop playing all other songs in the playlist

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

`Promise`<number\>

#### Defined in

[lib/player-service.ts:450](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L450)

___

### preloadPlaylist

▸ **preloadPlaylist**(): `void`

Preload all songs in the playlist, or at least 3 of them when unloadAll is true

#### Returns

`void`

#### Defined in

[lib/player-service.ts:373](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L373)

___

### prev

▸ **prev**(): `void`

Play the previously played song in the playlist if actual
song being played hasn't been played for more than 2 seconds,
otherwise it will simply restart the actual song

#### Returns

`void`

#### Defined in

[lib/player-service.ts:582](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L582)

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

[lib/player-service.ts:643](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L643)

___

### seekPerPosition

▸ **seekPerPosition**(`position`, `index?`): `void`

Jump to a given progress position in seconds of actual song,
if index is provided, it will make the jump on the song at the
given index in the playlist

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:666](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L666)

___

### setPLaylistFromRSSFeedURL

▸ **setPLaylistFromRSSFeedURL**(`url`): `Promise`<void\>

Load a playlist from the URL of a RSS feed file

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<void\>

#### Defined in

[lib/player-service.ts:786](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L786)

___

### setPlaylistFromSongObjects

▸ **setPlaylistFromSongObjects**(`songs`): `void`

Load a playlist from Partial Song object

#### Parameters

| Name | Type |
| :------ | :------ |
| `songs` | `Partial`<[Song](./player-service/interfaces/song.md)\>[] |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:752](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L752)

___

### setPlaylistFromUrls

▸ **setPlaylistFromUrls**(`urls`): `void`

Load a playlist from an array of song files URI

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `string`[] |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:739](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L739)

___

### shufflePlaylist

▸ `Private` **shufflePlaylist**(): `void`

Allows to shuffle the playlist

#### Returns

`void`

#### Defined in

[lib/player-service.ts:877](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L877)

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

[lib/player-service.ts:503](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L503)

___

### unload

▸ `Private` **unload**(): `void`

Unload song from memory

#### Returns

`void`

#### Defined in

[lib/player-service.ts:933](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L933)

___

### unloadSong

▸ **unloadSong**(`song`): `void`

Unload a song

#### Parameters

| Name | Type |
| :------ | :------ |
| `song` | [Song](./player-service/interfaces/song.md) |

#### Returns

`void`

#### Defined in

[lib/player-service.ts:385](https://github.com/Redeltaz/rumblestudio/blob/2c7855f/libs/player-service/src/lib/player-service.ts#L385)
