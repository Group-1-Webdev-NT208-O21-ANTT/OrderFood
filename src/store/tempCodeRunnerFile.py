# def fibonacci(n):
# 		if n <= 1:
# 			return n
# 		else:
# 			return fibonacci(n-1) + fibonacci(n-2)

# 	# Tính số Fibonacci thứ 10
# result = fibonacci(100)
# print("F(10) =", result)


#Song song
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

# Xác định các số Fibonacci gần 1000
fib_100 = fibonacci(100)
fib_200 = fibonacci(200)
fib_500 = fibonacci(500)
fib_499 = fibonacci(499)
fib_501 = fibonacci(501)
# Tính Fibonacci tại vị trí 1000
k = 1000 - 500
fib_1000 = fib_501 * fib_500 + fib_500 * fib_499

print("Số Fibonacci tại vị trí 1000:", fib_1000)