
var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = '';
modifiedHeaders['x-bili-device-bin'] = '';
modifiedHeaders['Authorization'] = '';
modifiedHeaders['User-Agent'] = '';
modifiedHeaders['buvid'] = '';
modifiedHeaders['x-bili-metadata-bin'] = '';
modifiedHeaders['x-bili-locale-bin'] = '';
modifiedHeaders['x-bili-network-bin'] = '';
modifiedHeaders['x-bili-fawkes-req-bin'] = '';
modifiedHeaders['x-bili-trace-id'] = '';
modifiedHeaders['x-bili-exps-bin'] = '';
modifiedHeaders['x-bili-network-bin'] = '';
$done({'headers': modifiedHeaders});
