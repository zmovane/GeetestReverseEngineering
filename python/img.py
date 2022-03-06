from io import BytesIO
import sys
from PIL import Image
import requests


def crop_image(img: Image, x, y, width, height):
    return img.crop((x, int(y), int(x + width), int(y + height)))


def paste_image(new_img: Image, img: Image, x, y, width, height):
    new_img.paste(img, (x, int(y), int(x + width), int(y + height)))


def restore_image(img: Image):
    img_list = [39, 38, 48, 49, 41, 40, 46, 47, 35, 34, 50, 51, 33, 32, 28, 29, 27, 26, 36, 37, 31, 30, 44, 45, 43,
                42, 12, 13, 23, 22, 14, 15, 21, 20, 8, 9, 25, 24, 6, 7, 3, 2, 0, 1, 11, 10, 4, 5, 19, 18, 16, 17]
    r = 312
    n = 160
    s = n / 2
    u = 10
    new_img = Image.new("RGBA", (r, n))
    for c in range(52):
        f = img_list[c] % 26 * 12 + 1
        _ = s if img_list[c] > 25 else 0
        crop_img = crop_image(img, f, _, u, s)
        paste_image(new_img, crop_img, c % 26 * 10, s if c > 25 else 0, u, s)
    return new_img


def compare_pixel(pix1, pix2, x, y):
    diff_max = 50
    diff_r = abs(pix1[x, y][0] - pix2[x, y][0])
    diff_g = abs(pix1[x, y][1] - pix2[x, y][1])
    diff_b = abs(pix1[x, y][2] - pix2[x, y][2])
    return diff_r > diff_max and diff_g > diff_max and diff_b > diff_max


def calculate_offset(img1: Image, img2: Image):
    img1 = restore_image(img1)
    img2 = restore_image(img2)
    pix1 = img1.load()
    pix2 = img2.load()
    idx_x = []
    for x in range(img1.size[0]):
        for y in range(img1.size[1]):
            if compare_pixel(pix1, pix2, x, y):
                idx_x.append(x)
    return sorted(idx_x)[0] - 3


def get_offset(bg_url, fullbg_url):
    resp1 = requests.get(bg_url)
    resp2 = requests.get(fullbg_url)
    img1 = Image.open(BytesIO(resp1.content))
    img2 = Image.open(BytesIO(resp2.content))
    print(calculate_offset(img1, img2))


if __name__ == '__main__':
    args = sys.argv[1:]
    get_offset(args[0], args[1])
