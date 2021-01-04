# coding=utf-8
import io
import sys

import cloudmusic

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')


def get(param):
    song = cloudmusic.search(param, 1)
    comment_list = song[0].getHotComments(5)
    songId = song[0].id
    comments = ''
    for i in range(len(comment_list) - 1):
        comments = comments + comment_list[i]['content'] + "|" + comment_list[i]['nickName'] + "|"
    comments = comments + comment_list[4]['content'] + "|" + comment_list[4]['nickName']
    print(songId + '+' + comments)


if __name__ == '__main__':
    songName = sys.argv[1]
    get(songName)
