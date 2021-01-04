# coding=utf-8
import io
import sys

import cloudmusic

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')


def searchSong(arg):
    getSongList = cloudmusic.search(arg, 1)
    data = getSongList[0].name + '|' + getSongList[0].artist[0] + '|' + getSongList[0].id + '|' + getSongList[0].url + '|' + getSongList[0].picUrl
    print(data)


if __name__ == '__main__':
    name = sys.argv[1]
    searchSong(name)
