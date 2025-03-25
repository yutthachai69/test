def count(rows):
    max_stars = 2 * rows - 1
    for i in range(rows):
        stars = 2 * (rows - i) - 1
        spaces = (max_stars - stars) // 2
        line = " " * spaces + " ".join("*" for _ in range(stars))
        print(line)

rows = int(input("Enter number of rows: "))
count(rows)